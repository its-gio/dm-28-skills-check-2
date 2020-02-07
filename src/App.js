import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      currentProd: null
    }

    this.getNewItems = this.getNewItems.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  componentDidMount() {
    Axios
      .get("/api/inventory")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.error(err));
  }

  getNewItems() {
    Axios
    .get("/api/inventory")
    .then(res => this.setState({ products: res.data }))
    .catch(err => console.error(err));
  }

  selectItem(currentProd) {
    this.setState({ currentProd })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard selectItem={this.selectItem} getNewItems={this.getNewItems} products={this.state.products} />
        <Form currentProd={this.state.currentProd} getNewItems={this.getNewItems}  />
      </div>
    );
  }
}

export default App;
