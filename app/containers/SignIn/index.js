/*
 *
 * SignIn
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


export default class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      email:"",
      password:"",
    }
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handlePassword = (event) => {
    this.setState({
      password:event.target.value
    })
  }
  signIn = () => {
      var _this = this;
      var data = new FormData();
      data.append("email", this.state.email);
      data.append("password", this.state.password);

      fetch("http://localhost:3000/api/SignIn", {
        method:"post",
        body: data
      })
      .then(function(res){
        return res.json();
      })
      .then(function(json){
        if(json.error){
          alert("error");
        }
        else if (json.token) {
          sessionStorage.setItem("token", json.token);
          fetch("http://localhost:3000/api/getUser?token="+json.token, {
            headers:{"Authorization":"Bearer "+json.token}
          })
          .then(function(res){
            return res.json();
          })
          .then(function(json){
            sessionStorage.setItem("user", JSON.stringify(json.user));
            alert("success");
            _this.context.router.push("/");
          })
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
      background: "url(http://i1065.photobucket.com/albums/u395/monkeyzealer/wood_background_zps0b8n5qop.gif)",
      backgroundSize: "100% 100%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingBottom: "20px",
    };
    const emailBox={
      width: "100%",
      height: "45px",
    };
    const emailTitle={
      width: "100%",
      fontWeight: "bold",
      marginBottom: "0",
    };
    const passwordBox={
      width: "100%",
      height: "45px",
    };
    const passwordTitle={
      paddingTop: "0",
      width: "300px",
      fontWeight: "bold",
      marginTop: "0",
      marginBottom: "0",
    };
    const formContainer={
      width:"300px",
      margin: "0 auto",
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
    };
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      textAlign: "center"
    }
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
      paddingLeft: "10px",
      paddingRight: "10px",
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
        <Helmet title="Auth" meta={[ { name: 'description', content: 'Description of Auth' }]}/>

        <main style={mainContainer}>
          <div style={main}>
            <div style={formContainer}>
              <h2 style={h2title}>Sign In</h2>
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
                  type="password"
                  style={passwordBox}
                  onChange={this.handlePassword}
                  hintText="&nbsp;"
                  hintStyle={styles.hintStyle}
                  inputStyle={styles.inputStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                />
                <br />
                <center><RaisedButton style={styles.button2} type="submit"
                backgroundColor="brown900" onTouchTap={this.signIn} label="Submit"
                className="button-submit" primary={true} /></center>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
Auth.contextTypes = {
  router: React.PropTypes.object
};
