/*
 *
 * Orders
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Orders extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      userID: "",
      productID: "",
      amount:"",
      totalPrice:"",
      token: sessionStorage.getItem("token"),
      user:JSON.parse(sessionStorage.getItem("user")),
    }
  }
  componentWillMount(){
    fetch("http://127.0.0.1:8000/api/getProduct/" + this.props.params.id)
    .then(function(res){
      return res.json()
    })
    .then(function(json){
      console.log(json);
      this.setState({
        product:json
      })
    }.bind(this))
}
  render() {
    return (
      <div>
        <Helmet title="Orders" meta={[ { name: 'description', content: 'Description of Orders' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
