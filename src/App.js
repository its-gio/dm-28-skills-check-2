import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [
        { imgURL: "https://i.ytimg.com/vi/BibG8h__JOE/maxresdefault.jpg", name: "Neck Wrap", price: "150" },
        { imgURL: "https://static.twentytwowords.com/cdn-cgi/image/width=675,quality=85,fit=scale-down,format=auto,onerror=redirect/https://static.twentytwowords.com/wp-content/uploads/pottyputter.jpg", name: "Golf Pratice", price: "250" },
        { imgURL: "https://i.ytimg.com/vi/7BNLzvtMkHw/maxresdefault.jpg", name: "Trump Chiapet", price: "1" },
        { imgURL: "https://board.ttvchannel.com/uploads/db5640/original/3X/f/6/f6dd464fd10a744c5d20c706057c086523e4499a.jpeg", name: "Bread Gloves", price: "974.99" },
      ]
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
