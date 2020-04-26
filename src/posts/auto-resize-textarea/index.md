---
title: Auto-resize a textarea as its content changes
date: '2019-05-25'
banner: 'Auto-resize textarea'
summary: 'Build a textarea that auto-resizes to fit its content using pure JavaScript.'
---
This post describes how to build an auto-resizing textarea. It has the following features:

- It starts out as a single line text field.
- As the content wraps to multiple lines, the textarea is automatically resized to fit the content, up to a maximum height.
- Once the maximum height is reached, the textarea won't grow any further, and its contents can be navigated with a scrollbar.

# The `scrollHeight` property

The main idea for this is the `scrollHeight` property of the textarea. This property represents the height required to display an element's content without using a vertical scrollbar. This is exactly what we need to auto-calculate the height of the textarea.

# Solution

Here is the complete solution. Explanation follows after the CodePen.

<iframe height="448" style="width: 100%;" scrolling="no" title="Auto-resizing textarea" src="//codepen.io/thinksInCode/embed/rgvwey/?height=448&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/thinksInCode/pen/rgvwey/'>Auto-resizing textarea</a> by Joe Attardi
  (<a href='https://codepen.io/thinksInCode'>@thinksInCode</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

# Explanation

## CSS styles

To make the textarea start out as a single line text field, we set its initial `height` and `min-height` to `1em`. To avoid a slight vertical scrollbar, we also set `overflow` to `hidden`. Lastly, to limit the amount that the textarea will grow, we also set a `max-height` of `5em`.

## Getting computed styles

Next, we need to grab a bunch of style properties for later calculation. To get these in pixels, we use `window.getComputedStyle` on the textarea element. This is an expensive call, so we're just doing it once and caching the results. If any of these CSS styles change, the computed style will have to be retrieved again. These computed styles are specified as strings such as `'24px'`, so we use `parseInt` to convert them to numbers. `parseInt` will automatically ignore the `px` at the end of the string, so we don't need to take substrings or anything like that.

## The `autoResize` function

The first thing we do is set the textarea back to a single line height. If we don't do this, the textarea won't automatically shrink as text is removed. Next, we get the `scrollHeight` of the textarea. Before just setting the height to this, we have to do a slight calculation. The `scrollHeight` also includes the padding. The `height` CSS property doesn't include padding, so we have to subtract the top and bottom padding before setting the new height.

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight), the `scrollHeight` property does not include the border. When I first tried this out, though, I noticed that the textarea would "jump" by a few pixels the first time the `autoResize` function was called, even when there was only a single line of text. By accounting for the top and bottom border in the calculation, I was able to avoid this "jump".

So anyway, once we have calculated the new height, we set it. This will resize the textarea. The `max-height` property is honored here. If there is more content than can fit in the `max-height`, we need the vertical scrollbar, so we set `overflow` back to `'scroll'`.

## Delaying the call to `autoResize`

You might notice that we're listening for the `keydown` event, then using `setTimeout` to delay the call to `autoResize`. If we instead listen for `keyup`, there will be a slight lag in updating the textarea's size. The new text appears just after the `keydown` event, but the textarea isn't resized until the key is released. To fix this, we listen for `keydown` instead. However, at the time the `keydown` event fires, the content isn't updated yet. We wait a tick by using `setTimeout` to delay the call. The user's experience is that the resize is immediate.

## Further improvements

This is a quick solution. There are several use cases that aren't covered here. For example, if content is pasted into the textarea, or if an insertion or deletion is undone via the system's Undo command. These can be done by clicking the mouse, so a `keydown` event never fires. For a fully working solution, these events would also need to be handled.
