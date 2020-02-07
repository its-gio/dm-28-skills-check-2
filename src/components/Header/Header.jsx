import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><Link to="/">Gift Dumps</Link></h1>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/addProduct">Add Item</Link></li>
        </ul>
      </header>
    )
  }
}
