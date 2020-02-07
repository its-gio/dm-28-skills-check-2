import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Axios from 'axios';
import { HashRouter as Router, Route, Switch } from "react-router-dom"

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
    this.getNewItems()
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
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/" exact render={(props) => <Dashboard {...props} selectItem={this.selectItem} getNewItems={this.getNewItems} products={this.state.products} />} />
            <Route path="/addProduct" render={(props) => <Form {...props} currentProd={this.state.currentProd} getNewItems={this.getNewItems} />} />
            <Route path="/edit/:id" render={(props) => <Form {...props} currentProd={this.state.currentProd} getNewItems={this.getNewItems} />} />
          </Switch>
          {/* <Dashboard selectItem={this.selectItem} getNewItems={this.getNewItems} products={this.state.products} /> */}
          {/* <Form currentProd={this.state.currentProd} getNewItems={this.getNewItems}  /> */}
        </div>
      </Router>
    );
  }
}

export default App;
