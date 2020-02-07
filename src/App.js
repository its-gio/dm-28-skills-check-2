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
      products: []
    }
  }

  componentDidMount() {
    Axios
      .get("/api/inventory")
      .then(res => this.setState({ products: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard products={this.state.products} />
        <Form />
      </div>
    );
  }
}

export default App;
