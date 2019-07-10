import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Menu from './components/Menu';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Table />
      </div>
    );
  }
}

export default App;
