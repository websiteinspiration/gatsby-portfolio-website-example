---
title: Create a basic lexer with JavaScript
date: '2016-10-30'
summary: 'Build a quick and dirty lexer to tokenize JSON.'
---
A lexer takes an input string and produces a list of tokens. This is the first step in parsing text.
For a project, I recently had to write a lexer for JSON to do syntax highlighting, and I thought
I'd share my approach.

# General approach
The approach for this lexer uses regular expressions to match tokens. As tokens are consumed
from the input text, the token is removed from the input string. The lexer continues in this
manner until the input text has been fully consumed, or no more tokens could be found.

Because JavaScript regular expressions don't have an option for a starting index, we will make
a copy of the input string. After consuming a token, we'll call `substring` on the input string
to remove the token from the input.

# Lexing JSON
The grammar for JSON is pretty simple, and is well documented on [json.org](http://json.org). 

To start off, let's make an array of the different token types and the regular expressions to match
them. Disclaimer: I'm no regex master, so some of these could possibly be made simpler.

```javascript
  const tokenTypes = [
    { regex: /^\s+/, tokenType: 'WHITESPACE' },
    { regex: /^[{}]/, tokenType: 'BRACE' },
    { regex: /^[\[\]]/, tokenType: 'BRACKET' },
    { regex: /^:/, tokenType: 'COLON' },
    { regex: /^,/, tokenType: 'COMMA' },
    { regex: /^-?\d+(?:\.\d+)?(?:e[+\-]?\d+)?/i, tokenType: 'NUMBER_LITERAL' },
    { regex: /^"(?:\\.|[^"])*"(?=:)/, tokenType: 'STRING_KEY'},
    { regex: /^"(?:\\.|[^"])*"/, tokenType: 'STRING_LITERAL'},
    { regex: /^true|false/, tokenType: 'BOOLEAN_LITERAL' },
    { regex: /^null/, tokenType: 'NULL' }
  ];
```

Note that each regular expression starts with the `^` character. This is to ensure it only matches
from the beginning of the string, which is what we want in order to consume the next token.

Besides the obvious ones (`WHITESPACE`, `BRACE`, `BRACKET`, `COLON`, `COMMA`, `BOOLEAN_LITERAL`, and `NULL`), I'll explain some of the more complex ones.

## Number literal

```javascript
  /^-?\d+(?:\.\d+)?(?:e[+\-]?\d+)?/i
```

JSON supports several different types of numbers. These include:
 - Integers, e.g. `42`
 - Decimal numbers, e.g. `1.23`
 - Scientific notation, e.g. `5e9` or `3.4e-12`

This regular expression first matches one or more digits. At that point, we handle integers.
Next, we have an optional `.` followed by one or more digits. This handles the decimal numbers.
Lastly, there's an optional `e`, followed by an optional plus or minus sign, followed by one or more
digits to handle the scientific notation. 

We make this case insensitive, because scientific notation could use `e` or `E` according to the
JSON specification.

## String literal

```javascript
  /^"(?:\\.|[^"])*"/
```

A string literal consists of a double quote, followed by zero or more instances of either an escaped
character or a non-double quote character, followed by a closing double quote. I cheated a little on
this one, and got this regex from a [Stack Overflow answer](http://stackoverflow.com/a/2039820/48405).

## String key

```javascript
  /^"(?:\\.|[^"])*"(?=\s*:)/
```

I made the distinction between strings that are keys in the object and strings that are values, so
that they could be colored differently in the syntax highlighting. 

The regex for the string key is the same as a string literal, except it uses lookahead to only match
string literals that are followed by a `:` character. The lookahead also includes optional whitespace
to match a key that has whitespace between the string and the colon, e.g. `"key" : "value"`.

# The lexing process
Here's the code for the lexer. Forgive my use of `var`, but I wrote the lexer to be compatible with older versions of Node. I'll explain it below:

```javascript{numberLines: true}
  exports.getTokens = function getTokens(json) {
    var input = typeof json === 'string' ? json : JSON.stringify(json);

    var tokens = [];
    var foundToken = false;

    var match;
    var i;
    var numTokenTypes = tokenTypes.length;

    do {
      for (i = 0; i < numTokenTypes; i++) {
        match = tokenTypes[i].regex.exec(input);
        if (match) {
          tokens.push({ type: tokenTypes[i].tokenType, value: match[0] });
          input = input.substring(match[0].length);
          foundToken = true;
          break;
        } 
      }
    } while (input.length > 0 && foundToken);

    return tokens;
  }
```

Line 2 gives us some flexibility, and allows us to tokenize both JSON strings and JavaScript objects.

Then we set up a bunch of variables that we'll need in the main loop on lines 3 to 10.

Starting on line 12 is the main loop. We loop through all of the token regexes, and look for 
a match. If a regex matched, then we have found that type of token. On line 16, we add the newly
discovered token to the list of tokens.

Now that we've matched a token, we need to remove it from the head of the input, so we just call
`substring` on the input string. Now that we've found a token, we don't need to continue this
iteration of the inner `for` loop, so we `break` out of it on line 19.

We continue this main loop until either (1) the input string has been fully consumed, or (2)
we didn't find a token, which means there was a syntax error. I've omitted error handling code
for simplicity.

And that's it! We've built a very simple lexer for JSON.

You can see the full code for the syntax highlighter at [https://github.com/joeattardi/json-colorizer](https://github.com/joeattardi/json-colorizer).
