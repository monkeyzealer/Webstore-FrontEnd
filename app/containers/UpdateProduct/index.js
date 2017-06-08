/*
 *
 * updateProduct
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import SelectField from 'material-ui/SelectField';
 import MenuItem from 'material-ui/MenuItem';
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


export default class UpdateProduct extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state={
      product:"",
      image:"",
      description:"",
      categoryID: "",
      stock:"",
      price:"",
      preview:"",
      categories:[],
      token:sessionStorage.getItem("token")
    }
  }
  componentWillMount(){
    fetch("http://sumorobot.codemonkeytestsites.com/api/showProduct/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        product:json.product,
        image:json.image,
        description:json.description,
        categoryID: json.categoryID,
        stock:json.stock,
        price:json.price,
        preview:json.image,
        categories:[],
      })
    }.bind(this))

    fetch("http://sumorobot.codemonkeytestsites.com/api/getCategories?token="+this.state.token)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        categories:json
      })
    }.bind(this))
  }


  handleProduct = (event) => {
    this.setState({
      product:event.target.value

    })
    console.log(this.state.product);
  }

  handleCategory = (event, index, value) => this.setState({categoryID:value});

  handleImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        image: file,
        preview: reader.result
      })
    }
    reader.readAsDataURL(file);
  }
  handleStock = (event) => {
    this.setState({
      stock:event.target.value

    })
    console.log(this.state.stock);
  }
  handlePrice = (event) => {
    this.setState({
      price:event.target.value

    })
    console.log(this.state.price);
  }
  handleDescription = (event) => {
    this.setState({
      description:event.target.value

    })
    console.log(this.state.description);
  }
  updateProduct = () => {
    var _this = this;
    var data = new FormData();
    data.append("image", this.state.image);
    data.append("product", this.state.product);
    data.append("stock", this.state.stock);
    data.append("price", this.state.price);
    data.append("categoryID", this.state.categoryID);
    data.append("description", this.state.description);

    fetch("http://sumorobot.codemonkeytestsites.com/api/updateProduct/"+this.props.params.id+"?token="+this.state.token,
    {
      method:"post",
      body: data,
      headers: {"Authorization":"Bearer "+this.state.token}
    })
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      if(json.error){
        alert(json.error);
      }
      else if (json.success) {
        alert(json.success);
        _this.setState({
          product:"",
          image:"",
          categoryID:"",
          stock:"",
          price:"",
          description:"",
          preview:"",
        })
        _this.context.router.push("/store");
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
      paddingTop: "60px",
      justifyContent: "center"
    };
    const formContainer={
      width:"50%",
      margin: "0 auto",
    };
    const Title={
      marginBottom: "0",
      paddingTop: "5px",
      width: "50%",
      fontWeight: "bold",
      marginTop: "0"
    };
    const contentBox={
      marginBottom: "0",
      marginTop: "0",
      width: "32.5%",
      height: "45px",
    };
    const descriptionBox={
      marginBottom: "0",
      marginTop: "0",
      width: "100%",
      height: "265px",
      maxHeight:"275px",
    };
    const h2title={
      paddingTop: "0",
      marginTop: "0",
      marginBottom: "5px",
    };
    const preview={
      maxWidth: "200px",
      maxHeight: "200px",
      margin: "12px"
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const categories = {
      border: "1px solid lightgray",
      marginTop: "10px",
      width: "300px",
      padding: "15px",
      paddingTop: "0",
    }
    const formContainerMobile={
      width:"90%",
      maxWidth:"300px",
      margin: "0 auto",
      color: "white"
    };
    const categoryTitle={
      marginBottom: "5px",
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
      backgroundColor: brown700,
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
        <Helmet title="updateProduct" meta={[ { name: 'description', content: 'Description of UpdateProduct' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
          <div style={main}>
            <div style={formContainer}>
              <h2 style={h2title}>Create Product</h2>
              <p style={Title}>Product Name:</p>
              <TextField
              onChange={this.handleProduct}
              value={this.state.product}
              style={contentBox}
              hintText="&nbsp;"
              hintStyle={styles.hintStyle}
              inputStyle={styles.inputStyle}
              underlineStyle={styles.underlineStyle}
              underlineFocusStyle={styles.underlineFocusStyle}
              />
              <br />
          <RaisedButton
            backgroundColor="rgb(58, 31, 0)"
            labelColor="wheat"
            label="Choose an Image"
            labelPosition="before"
            style={styles.uploadButton}
            style={styles.button}
            containerElement="label"
            >
          <input type="file" onChange={(e) => this.handleImage(e)}  style={styles.uploadInput} />
          </RaisedButton>
          <img style={preview} src={this.state.preview} />
          <br />
        <div style={categories}>
        <h4 style={categoryTitle}>Categories:</h4>
        <SelectField
          labelStyle={styles.label1}
          value={this.state.categoryID}
          onChange={this.handleCategory}
          className="Categories"
          style={styles.customWidth}
          >
          {this.state.categories.map((category, i) => (
            <MenuItem value={category.id} primaryText={category.category} key={i}/>
          ))}
        </SelectField>
        </div>
        <p style={Title}>Stock:</p>
        <TextField
        onChange={this.handleStock}
        value={this.state.stock}
        style={contentBox}
        hintText="&nbsp;"
        hintStyle={styles.hintStyle}
        inputStyle={styles.inputStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <p style={Title}>Price:</p>
        <TextField
        onChange={this.handlePrice}
        value={this.state.price}
        style={contentBox}
        hintText="&nbsp;"
        hintStyle={styles.hintStyle}
        inputStyle={styles.inputStyle}
        underlineStyle={styles.underlineStyle}
        underlineFocusStyle={styles.underlineFocusStyle}
        />
        <br />
        <p style={Title}>Description:</p>
          <TextField style={descriptionBox}
            onChange={this.handleDescription}
            value={this.state.description}
            multiLine={true}
            rows={10}
            textareaStyle={styles.textareaStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
          />
          <RaisedButton style={styles.button} type="submit"
          backgroundColor="rgb(58, 31, 0)"
          labelColor="wheat"
          onTouchTap={this.updateProduct}
          label="Submit"
          className="button-submit"  />
      </div>
      </div>
      </main>
      </Responsive>
      <Responsive maxDeviceWidth={1023}>
      <main style={mainContainer}>
        <div style={main}>
          <div style={formContainerMobile}>
            <h2 style={h2title}>Create Product</h2>
            <p style={Title}>Product Name:</p>
            <TextField
            onChange={this.handleProduct}
            value={this.state.product}
            style={contentBox}
            hintText="&nbsp;"
            hintStyle={styles.hintStyle}
            inputStyle={styles.inputStyle}
            underlineStyle={styles.underlineStyle}
            underlineFocusStyle={styles.underlineFocusStyle}
            />
            <br />
        <RaisedButton
          backgroundColor="rgb(58, 31, 0)"
          labelColor="wheat"
          label="Choose an Image"
          labelPosition="before"
          style={styles.uploadButton}
          style={styles.button}
          containerElement="label"
          >
        <input type="file" onChange={(e) => this.handleImage(e)}  style={styles.uploadInput} />
        </RaisedButton>
        <img style={preview} src={this.state.preview} />
        <br />
      <div style={categories}>
      <h4 style={categoryTitle}>Categories:</h4>
      <SelectField
        labelStyle={styles.label1}
        value={this.state.categoryID}
        onChange={this.handleCategory}
        className="Categories"
        style={styles.customWidth}
        >
        {this.state.categories.map((category, i) => (
          <MenuItem value={category.id} primaryText={category.category} key={i}/>
        ))}
      </SelectField>
      </div>
      <p style={Title}>Stock:</p>
      <TextField
      onChange={this.handleStock}
      value={this.state.stock}
      style={contentBox}
      hintText="&nbsp;"
      hintStyle={styles.hintStyle}
      inputStyle={styles.inputStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      />
      <br />
      <p style={Title}>Price:</p>
      <TextField
      onChange={this.handlePrice}
      value={this.state.price}
      style={contentBox}
      hintText="&nbsp;"
      hintStyle={styles.hintStyle}
      inputStyle={styles.inputStyle}
      underlineStyle={styles.underlineStyle}
      underlineFocusStyle={styles.underlineFocusStyle}
      />
      <br />
      <p style={Title}>Description:</p>
        <TextField style={descriptionBox}
          onChange={this.handleDescription}
          value={this.state.description}
          multiLine={true}
          rows={10}
          textareaStyle={styles.textareaStyle}
          underlineStyle={styles.underlineStyle}
          underlineFocusStyle={styles.underlineFocusStyle}
        />
        <RaisedButton style={styles.button} type="submit"
        backgroundColor="rgb(58, 31, 0)"
        labelColor="wheat"
        onTouchTap={this.updateProduct}
        label="Submit"
        className="button-submit"  />
    </div>
    </div>
    </main>
    </Responsive>
  <Footer style={footerStyle} />
</div>
    );
  }
}
UpdateProduct.contextTypes = {
  router: React.PropTypes.object
};
