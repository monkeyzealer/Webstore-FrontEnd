/*
 *
 * SignUp
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import Responsive from 'react-responsive';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
 import FontIcon from 'material-ui/FontIcon';
 import ActionAndroid from 'material-ui/svg-icons/action/android';
 import RaisedButton from 'material-ui/RaisedButton';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header';

export default class SignUp extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
    email: "",
    password: "",
    username: "",
   }
  }
  handleEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  handleUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  signUp = () => {
    var _this = this;
    var data = new FormData();
    data.append("email", this.state.email);
    data.append("password", this.state.password);
    data.append("username", this.state.username);

    fetch("http://127.0.0.1:8000/api/signUp",
    {
      method:"post",
      body: data
    })
      .then(function(res){
        return res.json();
      })
      .then(function(json){
        if(json.success){
          alert("Signed In")
            _this.context.router.push("/");
        }
        else if(json.error){
          alert("Error")
        }
      })
    }
  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1",
    };
    const main={
      width: "100%",
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingBottom: "20px",
    };
    const userNameBox={
      width: "100%",
      height: "45px",
    };
    const userNameTitle={
      width: "300px",
      fontWeight: "bold",
      marginBottom: "0",
    };
    const emailBox={
      width: "100%",
      height: "45px",
    };
    const emailTitle={
      paddingTop: "0",
      width: "100%",
      fontWeight: "bold",
      marginBottom: "0",
      marginTop: "0",
    };
    const passwordBox={
      width: "100%",
      height: "45px",
    };
    const passwordTitle={
      paddingTop: "0",
      width: "100%",
      fontWeight: "bold",
      marginTop: "0",
      marginBottom: "0",
    };
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      textAlign: "center"
    }
    const formContainer={
      width:"350px",
      margin: "0 auto",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
    };
    const styles = {
    underlineStyle: {
      borderColor: brown700,
    },
    underlineFocusStyle: {
      borderColor: brown900,
    },
    hintStyle: {
      width: "100%",
      height: "30px",
      color: "white",
    },
    inputStyle: {
      background: "rgba(0, 0, 0, 0.3)",
      width: "100%",
      height: "30px",
      color: "white",
      padding: "10px",
    },
    button2: {
    margin: 12,
    backgroundColor: brown900,
    width: "100px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  };
  const footerStyle ={
    alignSelf: "flex-end",
  };
    return (
      <div style={Container}>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>
        <Header />
        <main style={mainContainer}>
          <div style={main}>
            <div style={formContainer}>
              <h2 style={h2title}>Sign Up</h2>
                <p style={userNameTitle}>User Name:</p>
                <TextField
                  style={userNameBox}
                  onChange={this.handleUserName}
                  hintText="&nbsp;"
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
                <p style={emailTitle}>Email:</p>
                <TextField
                  style={emailBox}
                  onChange={this.handleEmail}
                  hintText="&nbsp;"
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
                <p style={passwordTitle}>Password:</p>
                <TextField
                  style={passwordBox}
                  onChange={this.handlePassword}
                  hintText="&nbsp;"
                  type="password"
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
                <br />
                <center><RaisedButton style={styles.button2} type="submit"
                backgroundColor="brown900" onTouchTap={this.signUp} label="Submit"
                className="button-submit" primary={true} /></center>
            </div>
          </div>
        </main>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
SignUp.contextTypes = {
  router: React.PropTypes.object
};
