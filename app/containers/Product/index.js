product/*
 *
 * Product
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Avatar from 'material-ui/Avatar';
 import TextField from 'material-ui/TextField';
 import {orange500, blue500, brown500, brown900, brown700,} from 'material-ui/styles/colors';
 import AppBar from 'material-ui/AppBar';
 import FlatButton from 'material-ui/FlatButton';
 import FontIcon from 'material-ui/FontIcon';
 import ActionAndroid from 'material-ui/svg-icons/action/android';
 import RaisedButton from 'material-ui/RaisedButton';
 import FileFolder from 'material-ui/svg-icons/file/folder';
 import List from 'material-ui/List/List';
 import ListItem from 'material-ui/List/ListItem';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';

export default class Product extends React.PureComponent {
  constructor(props)
  {
    super(props);
    this.state={
      product:"",
      token: sessionStorage.getItem("token"),
      commentBody: "",
      comments:[],
    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/showProduct/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        product:json
      })
    }.bind(this))
    fetch("http://127.0.0.1:8000/api/getComments/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        comments:json
      })
    }.bind(this))
}
handleComment = (event) =>
{
  this.setState({
    commentBody: event.target.value
  })
}
storeComment = () =>{
  var comments = this.state.comments;
  var data = new FormData();
  data.append("commentBody", this.state.commentBody);
  data.append("productID", this.props.params.id);

  fetch("http://127.0.0.1:8000/api/storeComment?token=" + this.state.token,
  {
    method:"post",
    body: data,
    headers:{"Authorization":"bearer "+this.state.token}
  })
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    if(json.error){
      alert(json.error);
    }
    else if (json.success) {
      //puts the new comment at the top of the comment box
      comments.unshift(json.data);
      this.setState({
        comments:comments
      })
      //forces it to update the comment box
      this.forceUpdate();
      alert(json.success);
    }
  }.bind(this))
}
deleteComment = () =>{
  var _this = this;
  fetch("http://127.0.0.1:8000/api/deleteComment/" + this.props.params.id + "?token=" + this.state.token, {
    method: "post",
    headers:{"Authorization":"bearer "+this.state.token}
  })
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    if(json.success)
    {
      alert(json.success);
      _this.context.router.push("/");
    }
    else if(json.error)
    {
      alert(json.error);
    }
  })
  var deleteComment = "";

  //if user isnt logged in it will show the Sign Link
  if(this.state.user === null)
  {
   deleteComment = "";
  }
  //if user is logged in it will show the dashboard and sign out links
  else {
    if(this.state.user.roleID !== 1) {
      deleteComment = "";
    }
  }
}
destroyProduct = () =>{
  var _this = this;
  fetch("http://127.0.0.1:8000/api/destroyProduct/" + this.params.id + "?token" + this.state.token, {
    method: "post",
    headers:{"Authorization":"bearer "+this.state.token}
  })
  .then(function(res){
    return res.json();
  })
  .then(function(json){
    if(json.success)
    {
      alert(json.success);
      _this.context.router.push("/");
    }
    else if(json.error)
    {
      alert(json.error);
    }
  })

  var editLink = <Link to={`/update/${this.props.params.id}`}>Edit</Link>;

  var deleteProduct = "";

  //if user isnt a admin it will show nothing
  if(this.state.user === null)
  {
    editLink = "",
    deleteProduct = "";
  }
  //if user is a admin it will show edit and delete link
  else {
    if(this.state.user.roleID !== 1){
      editLink = "";
      deleteProduct = "";
    }
  }
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
      paddingTop: "60px",
    };
    const editLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "5px"
    };
    const deleteLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "20px"
    };
    const commentContainer={
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      background: "#6D6E72",
      backgroundSize: "100% 100%",
    };
    const userComment={
      display: "flex",
      width: "100%",
      flexDirection: "column",
      borderTop: "1px solid black",
      padding: "15px",
      background: "rgba(0, 0, 0, 0.4)",
    };
    const userName={
      textDecoration: "bold",
      marginBottom: "0",
    };
    const comment={
      width: "100%",
      marginTop: "0.5em",
    };
    const timestamp={
      fontSize: "0.8em",
      margin: "0",
      paddingLeft: "5px",
    };
    const commentInputBox={
      marginLeft: "1em",
      marginRight: "0",
      marginBottom: "0",
      marginTop: "0",
      width: "90%",
      height: "255px",
    };
    const commentBox={
      width: "100%",
      borderTop: "1px solid white",
      paddingTop: "20px",
      color: "white",
    }
    const commentInputTitle={
      paddingLeft: "1em",
      paddingRight: "1em",
      marginBottom: "0",
      paddingTop: "0",
      width: "98%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const deleteComment={
      float: "left",
    }
    const styles = {
      customWidth: {
        width: 150,
      },
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
      textareaStyle: {
        background: "rgba(0, 0, 0, 0.3)",
        marginTop: "0",
        paddingLeft: "10px",
        paddingRight: "10px",
        height: "258px",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginBottom: "0"
      },
      uploadButton: {
        verticalAlign: 'middle',
        color: "red !important",
      },
      uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
      },
      button: {
      backgroundColor: "black !important" ,
      color: "red !important",
    },
    button2: {
    margin: 12,
    backgroundColor: brown900,
  },
  label1: {
    color: "red"
  },
  floatlabel1: {
    color: "red !important",
    border: "1px solid black important",
  },
};
    return (
      <div style={Container}>
        <Helmet title="Product" meta={[ { name: 'description', content: 'Description of Product' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
            <div style={imagePostContainer}>
              <img style={imagePost} src={this.state.product.image} />
            </div>
            <h1 style={postContentheader}>{this.state.product.product}</h1>
            <p style={postContent}>{this.state.product.stock}</p>
            <p style={postContent}>{this.state.product.price}</p>
            <p style={postContent}>{this.state.product.description}</p>
            <p style={editLink}><Link to={`/update/${this.props.params.id}`}>Edit</Link></p>
            <p style={deleteLink}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.destroyproduct}>Delete Post</button></p>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>
              <p style={deleteComment}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.deleteComment}>X</button></p>
                <p style={timestamp}>{comment.commentDate}</p>
                <h2 style={userName}>{comment.name}</h2>
                <p style={comment}>{comment.body}</p>
              </div>
            ))}
            <div style={commentBox}>
                <p style={commentInputTitle}>Comment here:</p>
                <TextField style={commentInputBox}
                  multiLine={true}
                  rows={10}
                  textareaStyle={styles.textareaStyle}
                  underlineStyle={styles.underlineStyle}
                  underlineFocusStyle={styles.underlineFocusStyle}
                  onChange={this.handleComment}
                  />
                 <br />
                 <RaisedButton style={styles.button2} type="submit"
                 label="Submit" onTouchTap={this.storeComment}
                 className="button-submit" primary={true} />
            </div>
          </div>
        </main>
        </Responsive>
        <Responsive maxDeviceWidth={1023}>
        <main style={mainContainer}>
          <div style={main}>
          <div style={imagePostContainer}>
            <img style={imagePost}  src={this.state.product.image} />
          </div>
          <h1 style={postContentheader}>{this.state.product.subject}</h1>
          <p style={postContent}>{this.state.product.body}</p>
          <p style={editLink}><Link activeStyle={{color:'#C8B560'}} to={`/update/${this.props.params.id}`}>Edit</Link></p>
          <p style={deleteLink}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.destroyproduct}>Delete Post</button></p>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>>
                <p style={deleteComment}><button activeStyle={{color:'#C8B560'}} onTouchTap={this.deleteComment}>X</button></p>
                <p style={timestamp}>{comment.commentDate}</p>
                <h2 style={userName}>{comment.name}</h2>
                <p style={comment}>{comment.body}</p>
              </div>
            ))}
          </div>
          <div style={commentBox}>
              <p style={commentInputTitle}>Comment here:</p>
              <TextField style={commentInputBox}
                multiLine={true}
                rows={10}
                textareaStyle={styles.textareaStyle}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
                onChange={this.handleComment}
                />
               <br />
               <RaisedButton style={styles.button2} type="submit"
               label="Submit" onTouchTap={this.storeComment}
               className="button-submit" primary={true} />
          </div>
        </main>
        </Responsive>
        <Footer style={footerStyle} />
      </div>
    );
  }
}
