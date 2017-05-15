import React from 'react';
import '../css/Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className="header-container">
        <h1 id="logo" className="run-animation">Speedskating Visualizer</h1>
          <div className="nav">
            <ul className="navLinks">
            </ul>
          </div>
      </header>
    );
  }
}

module.exports = Header
