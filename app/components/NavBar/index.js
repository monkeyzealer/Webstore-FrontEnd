/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router';
import Responsive from 'react-responsive';
import Menu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

class NavBar extends React.PureComponent {
  constructor(props)
  {
      super(props);
      this.state = {
        menuOpen:false,
        siteName:"http://localhost:3000",
        user:JSON.parse(sessionStorage.getItem("user"))
      }
    }
    componentWillMount()
    {
      console.log(this.state.user);
    }
    handleMenu = () => {
      if(this.state.menuOpen == false)
      {
        this.setState({
          menuOpen:true
        })
      }
      else if(this.state.menuOpen == true)
      {
        this.setState({
          menuOpen:False
        })
      }
    }

    showMenu = () => {
      const navLink = {
        margin:"5px",
        padding:"5px",
      }

      var signOutLink = <Link activeStyle={{color:'#C8B560'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

      var registerLink = "";

      var signInLink = "";

      var _this = this

      if(this.state.user === null)
      {
        signOutLink = "";
        signInLink = <Link activeStyle={{color:'#C8B560'}} to="/signin" style={navLink}>Sign In</Link>;
        registerLink = <Link activeStyle={{color:'#C8B560'}} to="/signup" style={navLink}>Register</Link>;
      }
    }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default NavBar;
