import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: []
    }
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
