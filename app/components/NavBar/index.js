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

      var signOutLink = <Link activeStyle={{color:'red'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

      var registerLink = "";

      var signInLink = "";

      var _this = this

      if(this.state.user === null)
      {
        signOutLink = "";
        signInLink = <Link activeStyle={{color:'red'}} to="/SignIn" style={navLink}>Sign In</Link>;
        registerLink = <Link activeStyle={{color:'red'}} to="/signup" style={navLink}>Register</Link>;
      }
      else {
        signInLink = "";
        registerLink = "";
      }

    if(this.state.menuOpen == true)
    {
      return(
        <nav>
        <Link activeStyle={{color:'red'}} to="/" style={navLink}>Home</Link>
        <Link activeStyle={{color:'red'}} to="/about" style={navLink}>About</Link>
        {signOutLink}
        {registerLink}
        {signInLink}
        </nav>
      )
    }
  }
  signOut = () => {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
  alert("Good bye and Come Again");
  this.contect.router.push("/");
  }
  render() {
    const navBar = {

    }
    const nav = {
      content: "",
      clear: "both",
      display: "table",
    }
    const navLink = {
      margin:'5px',
      padding:'5px',
      fontSize: "30px",
      textDecoration: "none",
      fontWeight: "900",
    }
    const titleStyle = {
      fontSize:"3em",
      fontVariant:"small-caps",
      color: "white",
    };
    const right={

    }
    const logo={
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/hack.sumo__zpslgl8q6we.png)",
       backgroundRepeat:"no-repeat",
       display: "block",
       width: "215px",
       height: "150px",
       marginTop: "-50px",
       backgroundSize: "100% 100%",
       position: "relative",
    }
    const navUl={
      listSytle: "none",
      width:"800px",
    }
    const navLI={
      float: "left",
    }
    const styles = {
      iconStyle: {
        color: "red",
      },
    };

    var signOutLink = <Link activeStyle={{color:'red'}} onTouchTap={() => this.signOut()} style={navLink}>Sign Out</Link>;

    var signInLink = "";

    var registerLink = "";

    //if user isnt logged in it will show the sign in link
    if(this.state.user === null)
    {
      signOutLink = "";
      signInLink = <Link activeStyle={{color:'red'}} to="/SignIn" style={navLink}>Sign In</Link>;
      registerLink = <Link activeStyle={{color:'red'}} to="/signup" style={navLink}>Register</Link>;
    }
    //if user is logged in it will show the sign out links
    else
      {
      signInLink = "";
      registerLink = "";
      }

    return (
      <div>
        <Responsive minDeviceWidth={1024}>
          <nav style={navBar}>
            <nav style={nav}>
              <ul style={navUl}>
                <li style={navLI}><Link activeStyle={{color:'red'}} to="/" style={navLink}>Home</Link></li>
                <li style={navLI}><Link activeStyle={{color:'red'}} to="/about" style={navLink}>About</Link></li>
                <li style={navLI}><span style={logo}></span></li>
                <li style={navLI}>{signOutLink}</li>
                <li style={navLI}>{registerLink}</li>
                <li style={navLI}>{signInLink}</li>
              </ul>
            </nav>
          </nav>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <nav style={navBar}>
            <div style={titleStyle}>{this.props.chicken}</div>
            <nav style={nav}>
              <IconButton
                iconStyle={styles.iconStyle}
                onTouchTap={this.handleMenu}>
                <Menu/>
              </IconButton>
            </nav>
          </nav>
          {this.showMenu()}
        </Responsive>
      </div>
    );
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.object
};
export default NavBar;
