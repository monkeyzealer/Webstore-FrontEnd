/*
 *
 * About
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header';
 import Responsive from 'react-responsive';

export default class About extends React.PureComponent {
  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      background: "white",
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1"
    }
    const main={
      width: "100%",
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingBottom: "20px",
      paddingTop: "70px",
    };
    const About={
      width: "90%",
      margin: "10px auto",
      paddingLeft: "10px",
      paddingRight: "10px",
      display: "flex",
      flexDirection: "column",

    };
    const AboutHeader={
      width: "100%",
      margin: "10px auto",
      paddingLeft: "0.5em",
      paddingRight: "0.5em",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      color: "red",
      fontWeight: "900"
    }
    const Video={
      textAlign: "center",
      padding: "20px",
    }
    const Image={
      margin: "30px auto",
    }
    const list={
      width: "90%",
      margin: "0 auto",
      paddingLeft: "10px",
      paddingRight: "10px",
    }
    const VideoMobile={
      textAlign: "center",
      padding: "5px",
      marginTop: "5px",
      marginBottom: "5px"
    }
    return (
      <div style={Container}>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
        <div style={main}>
          <p style={About}>
          Sumo Robot League is a non-profit
          robotics curriculum and sports
          league operated by HACK Augusta.
          Students design and build robots
          to compete in fully autonomous
          sumo wrestling.
          Each match motivates kids
          to learn and understand the
          principles of S.T.E.M.
          (Science, Technology, Engineering and Math),
          preparing them for the future by
          fostering an interest in these
          critical disciplines and an
          understanding of how they are practiced.</p>
          <h1 style={AboutHeader}>COMPETITION & CURRICULUM<hr /></h1>
          <p style={About}>
          Sumo Robot League is a scalable
          STEM education platform that offers an
          affordable competitive robotics curriculum
          for middle and high school students.
          Our program provides multiple hands on
          lessons that give students the opportunity
          to build electrical circuits,
          design and 3D print adaptive components,
          and code sensor-based
          autonomous response algorithms
          using the actual C++ programming language.
          In additiona, our kits are expandable
          to include exercises in mobile app
          development, machine learning,
          and the internet of things.
          </p>
          <p style={About}>
          The League has a Fall and
          Spring season coordinated with
          local school system schedules.
          Regional competitions are held at
          the end of each season in local
          communities. The championship
          tournament is held in Augusta,
          Georgia at the Greater Augusta
          Innovation Academy located in an
          18,000 sq. foot historic schoolhouse
          built in 1802. HACK Augusta is the
          non-profit that manages
          Sumo Robot League as well as
          theClubhou.se,
          a makerspace and startup incubator.
          This short video done by
          one of our students gives a glimpse
          into the scope of our program and
          what kids can do.
          </p>
          <p style={Video}><iframe width="854" height="480"
          src="https://www.youtube.com/embed/YYxOKU2c04c"
          frameborder="0" allowfullscreen></iframe></p>
          <h1 style={AboutHeader}>BENEFITS<hr /></h1>
          <p style={About}>
          Sumo Robot League is hands on, creative, outside-the-box, and
          self directed. We offer training, online resource libraries,
          and weekly virtual support for teachers and volunteers.
          Though our kits include all parts necessary for building a robot,
          we also include access to CAD and STL files so kids can
          design and 3D print their own custom robots.
          By merging sports, design, engineering, and programming fundamentals,
          Sumo Robot League helps kids find what motivates each of them to
          learn coding and STEM (Science, Technology, Engineering, Arts and Math).
          <img style={Image} width="50%" src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w" />
          </p>
          <h1 style={AboutHeader}>OUR GOALS<hr /></h1>
          <p style={list}>
             1. Teach students about robots and programming.<br />
             2. To give marginalized students the same recognition for efforts in
             technology as that given to students in athletics.<br />
             3. Provide tools, educational opportunities for science and math
             teachers to incorporate this curriculum into their STEM standards and
             Career Pathway standards.
             </p>
        </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
        <div style={main}>
          <p style={About}>
          Sumo Robot League is a non-profit
          robotics curriculum and sports
          league operated by HACK Augusta.
          Students design and build robots
          to compete in fully autonomous
          sumo wrestling.
          Each match motivates kids
          to learn and understand the
          principles of S.T.E.M.
          (Science, Technology, Engineering and Math),
          preparing them for the future by
          fostering an interest in these
          critical disciplines and an
          understanding of how they are practiced.</p>
          <h1 style={AboutHeader}>COMPETITION & CURRICULUM<hr /></h1>
          <p style={About}>
          Sumo Robot League is a scalable
          STEM education platform that offers an
          affordable competitive robotics curriculum
          for middle and high school students.
          Our program provides multiple hands on
          lessons that give students the opportunity
          to build electrical circuits,
          design and 3D print adaptive components,
          and code sensor-based
          autonomous response algorithms
          using the actual C++ programming language.
          In additiona, our kits are expandable
          to include exercises in mobile app
          development, machine learning,
          and the internet of things.
          </p>
          <p style={About}>
          The League has a Fall and
          Spring season coordinated with
          local school system schedules.
          Regional competitions are held at
          the end of each season in local
          communities. The championship
          tournament is held in Augusta,
          Georgia at the Greater Augusta
          Innovation Academy located in an
          18,000 sq. foot historic schoolhouse
          built in 1802. HACK Augusta is the
          non-profit that manages
          Sumo Robot League as well as
          theClubhou.se,
          a makerspace and startup incubator.
          This short video done by
          one of our students gives a glimpse
          into the scope of our program and
          what kids can do.
          </p>
          <p style={VideoMobile}><iframe width="250" height="141"
          src="https://www.youtube.com/embed/YYxOKU2c04c"
          frameborder="0" allowfullscreen></iframe></p>
          <h1 style={AboutHeader}>BENEFITS<hr /></h1>
          <p style={About}>
          Sumo Robot League is hands on, creative, outside-the-box, and
          self directed. We offer training, online resource libraries,
          and weekly virtual support for teachers and volunteers.
          Though our kits include all parts necessary for building a robot,
          we also include access to CAD and STL files so kids can
          design and 3D print their own custom robots.
          By merging sports, design, engineering, and programming fundamentals,
          Sumo Robot League helps kids find what motivates each of them to
          learn coding and STEM (Science, Technology, Engineering, Arts and Math).
          <img style={Image} width="50%" src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216f8be4b01226f10a8a49/1445031840407/LCPWSSumoRobot-48.jpg?format=1000w" />
          </p>
          <h1 style={AboutHeader}>OUR GOALS<hr /></h1>
          <p style={list}>
             1. Teach students about robots and programming.<br />
             2. To give marginalized students the same recognition for efforts in
             technology as that given to students in athletics.<br />
             3. Provide tools, educational opportunities for science and math
             teachers to incorporate this curriculum into their STEM standards and
             Career Pathway standards.
             </p>
        </div>
        </main>
        </Responsive>
      <Footer style={footerStyle} />
      </div>
    );
  }
}
