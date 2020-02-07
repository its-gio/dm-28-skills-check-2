import React, { Component } from 'react'
import Axios from 'axios';


export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      img_url: "",
      name: "",
      price: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.postItem = this.postItem.bind(this);
  }

  postItem(e) {
    e.preventDefault();
    Axios
      .post("/api/inventory", this.state)
      .then(() => this.props.getNewItems())
      .catch(err => console.error(err));
      this.handleClear(e);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClear(e) {
    e.preventDefault();
    this.setState({ img_url: "", name: "", price: "" })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} placeholder="Item Image URL" value={this.state.img_url} name="img_url" type="text"/>
        <input onChange={this.handleChange} placeholder="Item Name" value={this.state.name} name="name" type="text"/>
        <input onChange={this.handleChange} placeholder="Item Price" value={this.state.price} name="price" type="number"/>
        <button onClick={this.handleClear}>Cancel</button>
        <button onClick={this.postItem}>Add to Inventory</button>
      </form>
    )
  }
}