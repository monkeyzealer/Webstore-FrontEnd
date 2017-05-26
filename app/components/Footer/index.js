/**
*
* Footer
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';

class Footer extends React.PureComponent {
  render() {
    const footer={
      background: "url(https://superdevresources.com/wp-content/uploads/2014/11/black-metal-grill-texture-vector.jpg)",
      color: "white",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      fontSize: "20px",
      fontFamily: "Arial",
      height: "auto",
      backgroundRepeat: "repeat"
    }
    const footerInfo={
      width: "50%",
      display: "flex",
      flexDirection: "column",
    };
    const footLeft={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingLeft: "10%",
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "0",

    };
    const footRight={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingRight: "10%",
      textAlign: "right",
      marginTop: "10px",
      marginBottom: "0",
    };
    const footerInfoMobile={
      width: "100%",
      display: "flex",
      flexDirection: "row",
    };
    const footLeftMobile={
      paddingTop: "0.2em",
      paddingBottom: "0",
      paddingRight: "10px",
      paddingLeft: "10px",
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "0",
      width:"100%"

    };
    const footRightMobile={
      paddingTop: "0.2em",
      paddingBottom: "10px",
      paddingRight: "10px",
      paddingLeft: "10px",
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "0",
      width:"100%"
    };
    const footerBox={
      width:"100%",
      display:"flex",
      flexDirection: "row",

    }
    const socialBox={
      width:"100%",
      paddingTop: "10px",
      marginBottom: "0",
      textAlign:"center",
      borderBottom: "1px solid black",
      background: "#626262",
      borderTop: "1px solid black",
    }
    const social={
    marginLeft: "5px",
    marginRight: "5px",
    }
    const address={
      marginTop:"5px",
      fontFamily: "Times, 'Times New Roman', serif; !important",
      marginBottom:"10px"
    }

    return (
      <footer style={footer}>
      <div style={socialBox}>
      <a href="https://www.facebook.com/SumoRobotLeague/"><img style={social} width="50px" height="50px"
      src="http://i1065.photobucket.com/albums/u395/monkeyzealer/facebookicon_zpsvlc1zqb7.png" />
      </a>
      <a href="https://twitter.com/sumorobotleague?lang=en"><img style={social} width="50px" height="50px"
      src="http://i1065.photobucket.com/albums/u395/monkeyzealer/collection-popular-black-social-media-icons-printed-paper-kiev-ukraine-september-facebook-twitter-google-plus-instagram-7699_zps0axne3p8.png" />
      </a>
      <p style={address}>SUMO ROBOT LEAGUE, 540 TELFAIR STREET, AUGUSTA, GA, 30901</p>
      </div>
      <Responsive minDeviceWidth={1024}>
        <div style={footerBox}>
        <div style={footerInfo}>
        <div style={footLeft}> &copy; Sumo Robot League 2017 </div>
        </div>
        <div style={footerInfo}>
        <div style={footRight}> Powered by Code Monkey Web Design</div>
        </div>
        </div>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
        <div style={footerInfoMobile}>
        <div style={footLeftMobile}> &copy; Sumo Robot League 2017</div>
        </div>
        <div style={footerInfoMobile}>
        <div style={footRightMobile}> Powered by Code Monkey Web Design</div>
        </div>
      </Responsive>
      </footer>
    );
  }
}

export default Footer;
