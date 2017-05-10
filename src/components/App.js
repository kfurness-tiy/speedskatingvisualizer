import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Stats from './Stats';
import Visualizer from './Visualizer';

import '../css/App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="Header">
          <Header />
        </div>
        <div className="Main">
          <div className="Sidebar">
            <Sidebar />
          </div>
          <div className="Data">
            <Stats />
            <Visualizer />
          </div>
        </div>
        <div className="Bottom">
          <Footer />
        </div>
      </div>
    );
  }
}

module.exports = App
