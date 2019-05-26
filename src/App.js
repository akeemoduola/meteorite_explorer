import React, { Component } from 'react';
import Header from './components/Header.js';
import SearchPanel from './components/SearchPanel.js';
import SearchResult from './components/SearchResult.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SearchPanel />
        <SearchResult />
      </div>
    );
  }
}

export default App;
