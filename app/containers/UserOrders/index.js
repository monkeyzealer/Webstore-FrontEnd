/*
 *
 * UserOrders
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import {Link} from 'react-router';
 import {
   Table,
   TableBody,
   TableHeader,
   TableHeaderColumn,
   TableRow,
   TableRowColumn,
 } from 'material-ui/Table';
 import Footer from 'components/Footer';
 import NavBar from 'components/NavBar';
 import Header from 'components/Header'
 import Responsive from 'react-responsive';

export default class UserOrders extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      orders:[],
      products:[],
      user:JSON.parse(sessionStorage.getItem("user")),
      token:sessionStorage.getItem("token"),
      showCheckboxes: false,
    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/getOrders")
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      this.setState({
        orders:json
      })
    }.bind(this))

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
    const orderContent={
      width: "100%",
      height: "auto",
      overflow: "hidden",
      padding: "0.5em"
    };
    const orderInfo={
      textAlign: "center",
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
    const productTitle={
    marginBottom: "0",
    textAlign: "center",
    marginTop: "10px"
    };
    const orderBox={
        backgroundColor: "#BdBEC0",
        width: "24%",
        margin: "0.5em",
        textDecoration: "none",
        color: "black",
        border: "1px solid black"
    };

    return (
      <div style={Container}>
        <Helmet title="Orders" meta={[ { name: 'description', content: 'Description of Orders' }]}/>
        <Header />
        <main style={mainContainer}>
        <div style={main}>
        <div style={flexGrid}>
        {this.state.orders.map((order,i) => (
          <Link to={`/`} style={orderBox}>
            <div style={orderContent}>
              <h3 style={productTitle}> {order.product}</h3>
              <div style={orderInfo}>
              <div> Bought by <b>{order.name}</b> </div>
              <div><b>Amount:</b> {order.amount} </div>
              <div><b>TotalPrice:</b> ${order.totalPrice}</div>
              <div><b>Comment:</b> {order.comment}</div>
              </div>
            </div>
          </Link>
          ))}
      </div>
      </div>
    </main>
    <Footer style={footerStyle} />
      </div>
    );
  }
}
