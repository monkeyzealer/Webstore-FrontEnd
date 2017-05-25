/**
*
* Header
*
*/

import React from 'react';
import NavBar from 'components/NavBar';
import {Link} from 'react-router';
import Responsive from 'react-responsive';

class Header extends React.PureComponent {
  render() {
  const contact={
    textAlign: "center",
    width: "100%",
    background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/texture-blue-fonchik-simple-dark-colors-glow-background_zpszgp6j6ey.jpg)",
    backgroundSize: "100% 100%",
    fontSize: "20px",
    color: "snow",
    borderBottom: "2px solid black",
  };
  const headerbar={
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    margin: "auto",
    width: "75%",
    height: "60px",
    paddingTop: "100px"
  };
  const headerbox={
    margin: "0 auto",
  }
  const header={
    width: "100%",
    background: "url(https://superdevresources.com/wp-content/uploads/2014/11/black-metal-grill-texture-vector.jpg)",
  };
  const headerbarMobile={
    display: "flex",
    alignItems: "center",
    paddingTop: "5px",
    paddingBottom: "5px",
    margin: "auto",
    width: "75%",
    height: "auto",
    paddingTop: "0"
  };
   const headerboxMobile={
      width: "100%"
    }
  return (
    <header>
    <Responsive minDeviceWidth={1024}>
      <div style={header}>
          <div style={headerbar}>
            <div style={headerbox}>
            <NavBar />
            </div>
          </div>
      </div>
    </Responsive>
    <Responsive maxDeviceWidth={1023}>
    <div style={header}>
        <div style={headerbarMobile}>
          <div style={headerboxMobile}>
          <NavBar />
          </div>
        </div>
    </div>
  </Responsive>
    </header>
    );
  }
}

export default Header;
