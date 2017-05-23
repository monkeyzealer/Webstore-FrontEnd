/*
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
 import Dialog from 'material-ui/Dialog';




export default class Product extends React.PureComponent {
  constructor(props)
  {
    super(props);
    this.state={
      product:"",
      token: sessionStorage.getItem("token"),
      commentBody: "",
      amount: 0,
      totalPrice: 0,
      comment: "",
      comments:[],
      user:JSON.parse(sessionStorage.getItem("user")),
      open:false

    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/showProduct/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      console.log(json);
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
      _this.context.router.push("/store");
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
  fetch("http://127.0.0.1:8000/api/destroyProduct/" + this.props.params.id + "?token=" + this.state.token, {
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
      _this.context.router.push("/store");
    }
    else if(json.error)
    {
      alert(json.error);
    }
  })
}
  showMenu = () => {
    const edit ={
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "5px"
    };
    const deleteLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "20px"
    };

  var editLink = <Link style={{color:'red !important'}} to={`/update-product/${this.props.params.id}`}>Edit</Link>;

  var deleteProduct = <button style={{color:'red', background: 'black', border:'1px solid gray'}} onTouchTap={this.destroyProduct}>Delete Product</button>;

  //if user isnt a admin it will show nothing
  if(this.state.user === null)
  {
    editLink = "";
    deleteProduct = "";
  }
  //if user is a admin it will show edit and delete link
  else {
    if(this.state.user.roleID !== 1){
      editLink = "";
      deleteProduct = "";
    }
  }
  return(
    <div>
      <p style={edit}>{editLink}</p>
      <p style={deleteLink}>{deleteProduct}</p>
    </div>
  )
}


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  storeOrder = () =>{
    var _this = this
    var data = new FormData();
    data.append("productID", this.props.params.id) /* i dont think i need this */
    data.append("amount", this.state.amount)
    data.append("comment", this.state.comment)

    fetch("http://127.0.0.1:8000/api/storeOrder?token="+this.state.token,
  {
    method:"post",
    body:data,
    headers:{"Authorization":"bearer"+this.state.token}
  })
  .then(function(res){
    return res.json()
  })
  .then(function(json){
    if(json.error){
      alert(json.error);
    }
    else if (json.success) {
      alert("Success! Your Total is $"+json.total);
      _this.setState({
        amount:"",
        comment:"",
      })
    }
  })
  }

  handleAmount = (event) => {
    this.setState({
      amount:event.target.value

    })
    console.log(this.state.amount);
  }
  handleOrderComment = (event) => {
    this.setState({
      comment:event.target.value

    })
    console.log(this.state.comment);
  }

  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
    };
    const customContentStyle = {
      width: '30%',
      maxWidth: 'none',
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
      marginTop: "10px",
      marginBottom: "5px"
    };
    const imagePostContainer ={
      width: "100%",
      marginTop: "20px",
      textAlign: "center",
      justifyContent: "center",
      minHeight: "150px"
    }
    const imagePost={
      width:"auto",
      maxWidth: "90%",
      height:"auto",
      marginBottom: "20px",
      maxHeight: "250px"
    }
    const productHeader ={
      width: "100%",
      marginTop: "0px",
      paddingLeft: "10px",
      paddingRight: "10px",
      marginBottom: "0.5em",
      textAlign: "center",
    }
    const productContent={
      marginTop: "0",
      paddingLeft: "10px",
      paddingRight: "10px",
      maxWidth: "100%",
      marginBottom: "0",
      fontSize: "20px"
    }
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const deleteLink ={
      textAlign: "center",
      marginTop: "0",
      marginBottom: "50px"
    };
    const commentContainer={
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "row",
      background: "#6D6E72",
      color: "white"
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
      marginTop: "0"
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
      maxHeight:"255px"
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
    const Content={
      width: "20%",
      margin: "0 auto"
    }
    const PurchaseBox={
      width:"100%",
    }
    const Purchase={
      display: "flex",
      alignSelf:"center"
    }
    const formContainer={
      padding: "15px",
      fontWeight: "bold",
      color: "black"
    };
    const Title={
      marginBottom: "0",
      paddingTop: "5px",
      width: "50%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const orderCommentBox={
      marginBottom: "0",
      marginTop: "0",
      width: "100%",
      height: "265px",
      maxHeight:"265px",
    };
    const amountNumber={
      background: "rgba(0, 0, 0, 0.3)",
      marginLeft: "5px",
      color: "black",
      padding: "5px",
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
      margin: "0 auto !important"
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
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={this.storeOrder}
      />,
    ];
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
            <h1 style={productHeader}>{this.state.product.product}</h1>
            <div style={Content}>
            <p style={productContent}><b>Price:</b> ${this.state.product.price}</p>
            <p style={productContent}><b>Stock:</b> {this.state.product.stock}</p>
            <p style={productContent}><b>Description:</b><br />{this.state.product.description}</p>
            {this.showMenu()}
            <div style={PurchaseBox}>
            <div style={Purchase}>
            <RaisedButton label="Purchase" className="button-submit" style={styles.button} style={{display: 'flex', alignSelf: 'center', margin: '0 auto'}} backgroundColor="Black" labelColor="red !important" onTouchTap={this.handleOpen} />
            <Dialog
              title={this.state.product.product}
              actions={actions}
              modal={true}
              contentStyle={customContentStyle}
              open={this.state.open}
              actionsContainerStyle={{textAlign:'center'}}
            >
            <div style={formContainer}>
            <p style={Title}>Amount:</p>
            <input type="number" name="quantity" min="1" max={this.state.product.stock} value={this.state.amount} onChange={this.handleAmount} style={amountNumber} ></input>
            <p style={Title}>Comment:</p>
              <TextField style={orderCommentBox}
                onChange={this.handleOrderComment}
                value={this.state.comment}
                multiLine={true}
                rows={10}
                textareaStyle={styles.textareaStyle}
                underlineStyle={styles.underlineStyle}
                underlineFocusStyle={styles.underlineFocusStyle}
              />
            </div>
            </Dialog>
            </div>
            </div>
            </div>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>
              <p style={deleteComment}><button style={{border:'1px solid white'}} onTouchTap={this.deleteComment}>X</button></p>
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
              <img style={imagePost} src={this.state.product.image} />
            </div>
            <h1 style={productHeader}>{this.state.product.product}</h1>
            <div style={Content}>
            <p style={productContent}><b>Price:</b> ${this.state.product.price}</p>
            <p style={productContent}><b>Stock:</b> {this.state.product.stock}</p>
            <p style={productContent}><b>Description:</b><br />{this.state.product.description}</p>
            {this.showMenu()}
            </div>
          </div>
          <div style={commentContainer}>
            {this.state.comments.map((comment,i) => (
              <div style={userComment} key={i}>
              <p style={deleteComment}><button style={{border:'1px solid white'}} onTouchTap={this.deleteComment}>X</button></p>
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
        <Footer style={footerStyle} />
      </div>
    );
  }
}
Product.contextTypes = {
  router: React.PropTypes.object
};
