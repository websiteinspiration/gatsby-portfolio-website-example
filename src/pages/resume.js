import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import WorkExperience from '../components/resume/workExperience';

import Layout from '../components/layout';

import styles from './resume.module.scss';

export default function Resume() {
  const data = useStaticQuery(graphql`
    fragment logoImage on File {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      uml: file(relativePath: { eq: "resume/uml.png" }) {
        ...logoImage
      }

      salesforce: file(relativePath: { eq: "resume/salesforce.png" }) {
        ...logoImage
      }

      constantContact: file(relativePath: { eq: "resume/constantContact.png" }) {
        ...logoImage
      }

      ingenico: file(relativePath: { eq: "resume/ingenico.png" }) {
        ...logoImage
      }

      dell: file(relativePath: { eq: "resume/dell.jpeg" }) {
        ...logoImage
      }

      nortel: file(relativePath: { eq: "resume/nortel.png" }) {
        ...logoImage
      }

      bluesocket: file(relativePath: { eq: "resume/bluesocket.png" }) {
        ...logoImage
      }

      drc: file(relativePath: { eq: "resume/drc.png" }) {
        ...logoImage
      }

      ironMountain: file(relativePath: { eq: "resume/ironMountain.png" }) {
        ...logoImage
      }
      
    }
  `);

  return (
    <Layout>
      <main id={styles.resume}>

        <h1><FontAwesomeIcon icon="graduation-cap" /> Education</h1>
        <section className={styles.resumeSection}>
          <div>
            <Img fixed={data.uml.childImageSharp.fixed} />
          </div>
          <div>
            <h2>UMass Lowell</h2>
            <div>Lowell, Massachusetts</div>
            <div>2000 - 2004</div>
          </div>
          <div>
            <ul>
              <li>B.S. Computer Science</li>
              <li>Summa Cum Laude</li>
            </ul>
          </div>
        </section>

        <h1><FontAwesomeIcon icon="briefcase" /> Work Experience</h1>

        <WorkExperience
          logo={data.salesforce}
          name="Salesforce"
          title="Senior Member of Technical Staff"
          years="2017 - present"
          location="Burlington, Massachusetts">
          <ul>
            <li>Co-lead on a project to create an Angular component library for the Salesforce Lightning Design System.</li>
            <li>Served as Scrum Master for the development team.</li>
            <li>Supported other teams ramping up on Angular development.</li>
            <li>Led an effort to consolidate several Git repositories into a single monorepo, and wrote supporting tooling.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.constantContact}
          name="Constant Contact"
          title="Senior Software Engineer II"
          years="2015 - 2017"
          location="Waltham, Massachusetts">
          <ul>
            <li>Worked on Constant Contact’s third generation email editor, a drag-and-drop WYSIWYG editor for building rich emails.</li>
            <li>Mentored a team of junior engineers for their capstone project.</li>
            <li>Built a dashboard for showing pull requests across multiple GitHub repositories using React and Node.js.</li>
            <li>Participated in regular Voice of the Customer (VOC) events including customer visits and support call listening sessions.</li>
            <li>Led development of several highly-requested features.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.ingenico}
          name="Ingenico Mobile Solutions"
          title="Senior Software Engineer"
          years="2014 - 2015"
          location="Boston, Massachusetts">
          <ul>
            <li>Lead engineer of a small team consisting of three junior engineers.</li>
            <li>Performed extensive work on ROAMmerchant (merchant-facing web application) and REST API.</li>
            <li>Led an effort to give the ROAMmerchant front-end a visual overhaul.</li>
            <li>Developed a JavaScript based Virtual Terminal SDK, allowing clients to build their own virtual terminal UI to accept credit card transactions using Ingenico’s backend.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.dell}
          name="Dell"
          title="Senior Software Engineer"
          years="2009 - 2014"
          location="Nashua, New Hampshire">
          <ul>
            <li>Led development of a cross-platform mobile application for EqualLogic storage arrays using Sencha Touch and PhoneGap.</li>
            <li>Contributed to the development of a proof-of-concept web management UI using Angular 1 and Kendo UI.</li>
            <li>Worked on Group Manager, the EqualLogic storage array application</li>
            <li>Led a project to make the EqualLogic management UI fully accessible and 508 compliant.</li>
            <li>Launched a code quality initiative, setting up code reviews with Review Board, continuous integration with Jenkins, and unit testing with JUnit.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.nortel}
          name="Nortel"
          title="Software Engineer"
          years="2008 - 2009"
          location="Billerica, Massachusetts">
          <ul>
            <li>Continued work on the sipXecs open-source project along with the commercial, Nortel-supported SCS 500 edition.</li>
            <li>Integrated sipX/SCS 500 with FreeSWITCH conference bridge, with a conference management UI to manage participants.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.bluesocket}
          name="Bluesocket"
          title="Software Engineer"
          years="2006 - 2008"
          location="Burlington, Massachusetts">
          <ul>
            <li>Worked on the sipXecs open-source SIP PBX project using Java/Tapestry, along with client-side JavaScript and CSS work.</li>
            <li>Implemented a search engine for the BlueView Management System (BVMS) using Apache Lucene.</li>
            <li>Implemented new front-end functionality using Apache Struts and Velocity.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.drc}
          name="Dynamics Research Corporation"
          title="Software Engineer"
          years="2004 - 2006"
          location="Andover, Massachusetts">
          <ul>
            <li>Worked on a team to re-implement a Java Swing application as a Java web application with Spring and Struts. Front-end work with JSP, JavaScript, and CSS.</li>
            <li>Updated a Department of Defense web application to be accessible/508 compliant.</li>
            <li>Designed and implemented a proof of concept visualization application for the DoD using Java Swing and JAXB.</li>
            <li>Developed a test automation system using JUnit and Selenium.</li>
          </ul>
        </WorkExperience>

        <WorkExperience
          logo={data.ironMountain}
          name="Iron Mountain"
          title="Software Engineer (Contractor)"
          years="2004"
          location="Boston, Massachusetts">
          <ul>
            <li>In a sustaining role, investigated and fixed bugs in the Digital Archives application using Struts and EJB.</li>
            <li>Implemented a graphical tool with Java Swing to automate parts of the customer onboarding process. This resulted in less downtime during onboarding and faster integration of new customer data.</li>
          </ul>
        </WorkExperience>

      </main>
    </Layout>
  );
}