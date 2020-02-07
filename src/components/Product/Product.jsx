import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
      <div>
        <img src={this.props.product.imgURL} alt={this.props.product.name}/>
        <h1>{this.props.product.name}</h1>
        <p>${this.props.product.price}</p>
      </div>
    )
  }
}
