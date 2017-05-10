/**
*
* Header
*
*/

import React from 'react';
import NavBar from 'components/NavBar';
import {Link} from 'react-router';

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
  }
  const  headerbar={
    display: "flex",
    alignItems: "center",
    paddingTop: "5px";
    paddingBottom: "5px",
    margin: "auto",
    width: "75%",
    height: "auto",
  };
  }
  return (
      <div>
      <div style={headerbar}>
      <img src="http://i1065.photobucket.com/albums/u395/monkeyzealer/Hyperforce_Insignia2_zpscu0i814l.png" />
        <div style="links">
          Home   About   Register   Sign In
        </div>
      </div>
      </div>
    );
  }
}

export default Header;
