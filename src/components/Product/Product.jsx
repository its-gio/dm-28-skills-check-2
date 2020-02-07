import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from "react-router-dom"

export default class Product extends Component {
  constructor() {
    super()

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    Axios
      .delete(`/api/inventory/${this.props.product.product_id}`)
      .then(() => this.props.getNewItems())
      .catch(err => console.error(err));
  }

  

  render() {
    return (
      <div>
        <img src={this.props.product.img_url} alt={this.props.product.name}/>
        <h1>{this.props.product.name}</h1>
        <p>${this.props.product.price}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <Link to={`/edit/${this.props.product.product_id}`}><button>Edit</button></Link>
      </div>
    )
  }
}
// onClick={() => this.props.selectItem(this.props.product)}