import React, { Component } from 'react'
import Product from '../Product/Product'


export default class Dashboard extends Component {
  render() {
    let productsMap = this.props.products.map((product, i) => <Product selectItem={this.props.selectItem} getNewItems={this.props.getNewItems} key={ i } product={product} />)
    return (
      <div>
        { productsMap }
      </div>
    )
  }
}
