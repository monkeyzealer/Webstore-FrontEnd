/*
 *
 * Product
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Product extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Product" meta={[ { name: 'description', content: 'Description of Product' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}
