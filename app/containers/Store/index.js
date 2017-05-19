/*
 *
 * Store
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import Avatar from 'material-ui/Avatar';
 import FileFolder from 'material-ui/svg-icons/file/folder';
 import FontIcon from 'material-ui/FontIcon';
 import List from 'material-ui/List/List';
 import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
 import ListItem from 'material-ui/List/ListItem';
 import DropDownMenu from 'material-ui/DropDownMenu';
 import MenuItem from 'material-ui/MenuItem';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';

 /**
  * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
  */


export default class Store extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      products:[],
      user:JSON.parse(sessionStorage.getItem("user"))
    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/getProducts")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        products:json
      })
    }.bind(this))
  }
  showMenu = () => {
   var createProductLink = <Link style={{color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/create-product">Create Product</Link>;

   var createCategoryLink = <Link to="/create-category" style={{color:'red', textDecoration:'none', fontSize:'18px', border:'1px solid gray', padding:'10px', background:'black'}}>Create Category</Link>;

   var _this = this

   if(this.state.user === null)
   {
    createProductLink = "";
    createCategoryLink = "";
   }
   else {
     if(this.state.user.roleID !== 1) {
       createProductLink = "";
       createCategoryLink = "";

     }
   }
return(
  <div>
    {createProductLink} {createCategoryLink}
  </div>
)

}

 handleChange = (event, index, value) => this.setState({value});

  render() {
    const Container={
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "100vh",
      background: "white",
    };
    const mainContainer={
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      flexGrow: "1"
    };
    const main={
      width: "100%",
      height: "auto",
      background: "white",
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      paddingBottom: "20px",
      paddingTop: "60px",
    };
    const footerStyle ={
      alignSelf: "flex-end",
    };
    const productImage={
      width: "100%",
      height: "250px",
      background: "rgba(255, 255, 255, 0.3)",
      position: "relative",
      padding: "0",
      borderRadius: "0",
    }
    const flexGrid ={
      margin: "0 auto",
      padding: "0",
      display: "-webkit-flex",
      display: "flex",
      flexWrap: "wrap",
      width: "95%",
      marginBottom: "20px"
    };
    const flexGridLi ={
      position: "relative",
      listStyle: "none",
      display: "-webkit-flex",
      display: "flex",
      margin: "0",
      flex: "auto",
      width: "25%",  /* <-- more control */
    };
    const productContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
      padding: "0.5em"
    };
    const productTitle={
    marginBottom: "0",
    textAlign: "center",
    marginTop: "10px"
    };
    const price={
      textAlign: "center",
    };
    const Product={
      border: "0",
      height: "auto",
      maxWidth: "100%",
    };
    const Productbox={
        backgroundColor: "#BdBEC0",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "black",
        border: "1px solid black"
    };
    const AdminBar = {
      width: "100%",
      color: "red !important",
      margin: "0 auto",
      textAlign: "left",
      padding: "12px",
      paddingLeft: "2.8%"
    }
    const AdminLink = {
      color: "red !important",
      textDecoration: "none"
    }

    const styles = {
  customWidth: {
    width: 200,
  },
};
    return (
      <div style={Container}>
        <Helmet title="Store" meta={[ { name: 'description', content: 'Description of Store' }]}/>
        <Header />
        <main style={mainContainer}>
        <div style={main}>
        <div style={AdminBar}>
        {this.showMenu()}
        </div>
        <ui style={flexGrid}>
          <li style={flexGridLi}>
        {this.state.products.map((product,i) => (
          <Link to={`/product/${product.id}`} style={Productbox}>
            <div style={Product}>
              <img
                  src={product.image}
                  style={productImage}
                  className="Product"
                />
            </div>
            <div style={productContent}>
              <h3 style={productTitle}> {product.product} </h3>
              <div style={price}>Price: ${product.price}</div>
            </div>
          </Link>
        ))}
        </li>
      </ui>
      </div>
    </main>
    <Footer style={footerStyle} />
    </div>
    );
  }
}
