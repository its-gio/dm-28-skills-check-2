import React, { Component } from 'react'

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgURL: "",
      name: "",
      price: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({ imgURL: "", name: "", price: "" })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChange} value={this.state.imgURL} name="imgURL" type="text"/>
        <input onChange={this.handleChange} value={this.state.name} name="name" type="text"/>
        <input onChange={this.handleChange} value={this.state.price} name="price" type="number"/>
        <button onClick={this.handleCancel}>Cancel</button>
        <button>Add to Inventory</button>
      </form>
    )
  }
}