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
 import ListItem from 'material-ui/List/ListItem';
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
    const AdminBarLink ={
      marginBottom: "25px"
    };

   var createProductLink = <Link style={{marginBottom: '10px', color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/create-product">Create Product</Link>;

   var createCategoryLink = <Link to="/create-category" style={{color:'red', textDecoration:'none', fontSize:'18px', border:'1px solid gray', padding:'10px', background:'black'}}>Create Category</Link>;

   var deleteCategoryLink = <Link style={{color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/delete-category">Delete Category</Link>;

   var OrdersLink = <Link style={{color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/orders">View Orders</Link>

   var _this = this

   if(this.state.user === null)
   {
    OrdersLink = "";
    createProductLink = "";
    createCategoryLink = "";
    deleteCategoryLink = "";
   }
   else {
     if(this.state.user.roleID !== 1) {
       OrdersLink = "";
       createProductLink = "";
       createCategoryLink = "";
       deleteCategoryLink = "";
     }
   }
return(
  <div>
  <Responsive minDeviceWidth={1024}>
    {createProductLink} {createCategoryLink} {deleteCategoryLink} {OrdersLink} <Link style={{color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/user-orders">My Orders</Link>
  </Responsive>
  <Responsive maxDeviceWidth={1023}>
  <p style={AdminBarLink}>{createProductLink}</p> <p style={AdminBarLink}>{createCategoryLink}</p> <p style={AdminBarLink}> {deleteCategoryLink} </p> <p style={AdminBarLink}> {OrdersLink} </p> <p> <Link style={{color:'red', textDecoration:'none', padding:'10px', border:'1px solid gray', background:'black', fontSize:'18px'}} to="/user-orders">My Orders</Link></p>
</Responsive>
  </div>
)

}


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
    const AdminBarLink ={
      marginBottom: "5px"
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
      width: "20%",  /* <-- more control */
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
        width: "24%",
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
    const ProductboxMobile={
        backgroundColor: "#BdBEC0",
        width: "100%",
        margin: "0.5em",
        textDecoration: "none",
        color: "black",
        border: "1px solid black"
    };
    const styles = {
  customWidth: {
    width: 200,
  },
};
    return (
      <div style={Container}>
        <Helmet title="Store" meta={[ { name: 'description', content: 'Description of Store' }]}/>
        <Header />
        <Responsive minDeviceWidth={1024}>
        <main style={mainContainer}>
        <div style={main}>
        <div style={AdminBar}>
        {this.showMenu()}
        </div>
        <div style={flexGrid}>
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
      </div>
      </div>
    </main>
    </Responsive>
    <Responsive maxDeviceWidth={1023}>
    <main style={mainContainer}>
    <div style={main}>
    <div style={AdminBar}>
    {this.showMenu()}
    </div>
    <div style={flexGrid}>
    {this.state.products.map((product,i) => (
      <Link to={`/product/${product.id}`} style={ProductboxMobile}>
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
  </div>
  </div>
</main>
</Responsive>
    <Footer style={footerStyle} />
    </div>
    );
  }
}
