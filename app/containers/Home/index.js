/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import NavBar from 'components/NavBar';
import Header from 'components/Header';

export default class Home extends React.PureComponent {
  render() {
    const footerStyle ={
      alignSelf: "flex-end",
    };
    return (
      <div>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        <Header />

        <Footer style={footerStyle} />
      </div>
    );
  }
}
