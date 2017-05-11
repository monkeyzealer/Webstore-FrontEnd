/**
*
* Footer
*
*/

import React from 'react';

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
      borderTop: "1px solid black",
      height: "50px",
    }
    const footerInfo={
      width: "50%",
      display: "flex",
      flexDirection: "column",
    };
    const footLeft={
      paddingTop: "0.2em",
      paddingBottom: "0",
      paddingLeft: "10%",
      textAlign: "left",
      marginTop: "10px",
      marginBottom: "0",
    };
    const footRight={
      paddingTop: "0.2em",
      paddingBottom: "0",
      paddingRight: "10%",
      textAlign: "right",
      marginTop: "10px",
      marginBottom: "0",
    };

    return (
      <footer style={footer}>
        <div style={footerInfo}>
        <p style={footLeft}> &copy; Sumo Robot League 2017 </p>
        </div>
        <div style={footerInfo}>
        <p style={footRight}> Powered by Code Monkey Web Design</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
