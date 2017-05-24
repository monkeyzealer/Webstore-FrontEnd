/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import NavBar from 'components/NavBar';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Responsive from 'react-responsive';

export default class Home extends React.PureComponent {
  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      background: "white",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1"
    };
    const main={
      width: "100%",
      height: "auto",
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingBottom: "20px",
      paddingTop: "60px",
    };
    const Quote={
      width: "55%",
      margin: "20px auto",
    }
    const Quotation={
      width: "100%",
      margin: "0 auto",
      color: "gray",
      fontSize: "14px",
      textAlign: "center",
      marginTop: "10px"
    }
    const imageContainer={
      width: "80%",
      margin: "0 auto",
      textAlign: "center",
    }
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const Image={
      margin: "20px auto",
    }
    const Video={
      textAlign: "center",
      padding: "20px",
    }
    const VideoMobile={
      textAlign: "center",
      padding: "10px",
      margin: "5px"
    }
    const Title={
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
    const Content={
      width: "55%",
      margin: "5px auto",
      marginBottom: "30px",
      textAlign: "center"
    }
  return (
  <div style={Container}>
    <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
    <Header />
    <Responsive minDeviceWidth={1024}>
    <main style={mainContainer}>
      <div style={main}>
        <p style={imageContainer}><img style={Image} width="50%" src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/55f19cdbe4b0182a80facb52/1441897692346/?format=750w" /></p>
        <hr /><br />
        <p style={Quote}>
        "We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support."
        <br />
        <div style={Quotation}>
        — Ned Murray, Headmaster - Episcopal Day School
        </div>
        </p>
        <p style={Quote}>
        "We are a small school, roughly 330 students... Our robotics team as of now consists of about 8 people, a number that we hope to increase in time, so these large, expensive programs simply are not compatible with our school as of yet. That’s why we use Sumo Robot League."
        <br />
        <div style={Quotation}>
        — Sam, Student, Atlanta
        </div>
        </p>
        <br /><hr />
        <p style={Video}>
        <iframe src="https://player.vimeo.com/video/167940688" width="1050" height="591" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </p>
        <h1 style={Title}>
        BUILDING THE PROGRAMMERS OF THE FUTURE
        </h1>
        <p style={Content}>
        Sumo Robot League believes in
        a future where every person
        has the skills to build a
        robot of their own. We have
        focused thousands of hours on
        developing an affordable
        robotics kit, programming
        class, and S.T.E.M. Teacher
        Training camp at a fraction of
        the cost of other robotics
        programs. This allows every
        student the opportunity to
        learn to code and build a robot
        of their own.
        </p>
    </div>
  </main>
  </Responsive>
        <Responsive maxDeviceWidth={1023}>
          <main style={mainContainer}>
            <div style={main}>
            <p style={imageContainer}><img style={Image} width="50%" src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/55f19cdbe4b0182a80facb52/1441897692346/?format=750w" /></p>
              <hr /><br />
              <p style={Quote}>
              "We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done. Sumo Robot League has made it easier for us to adapt and adopt by providing training, curriculum, materials, and support."
              <br />
              <div style={Quotation}>
              — Ned Murray, Headmaster - Episcopal Day School
              </div>
              </p>
              <p style={Quote}>
              "We are a small school, roughly 330 students... Our robotics team as of now consists of about 8 people, a number that we hope to increase in time, so these large, expensive programs simply are not compatible with our school as of yet. That’s why we use Sumo Robot League."
              <br />
              <div style={Quotation}>
              — Sam, Student, Atlanta
              </div>
              </p>
              <br /><hr />
              <p style={VideoMobile}>
              <iframe src="https://player.vimeo.com/video/167940688" width="250" height="141" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
              </p>
              <h1 style={Title}>
              BUILDING THE PROGRAMMERS OF THE FUTURE
              </h1>
              <p style={Content}>
              Sumo Robot League believes in
              a future where every person
              has the skills to build a
              robot of their own. We have
              focused thousands of hours on
              developing an affordable
              robotics kit, programming
              class, and S.T.E.M. Teacher
              Training camp at a fraction of
              the cost of other robotics
              programs. This allows every
              student the opportunity to
              learn to code and build a robot
              of their own.
              </p>
            </div>
          </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
