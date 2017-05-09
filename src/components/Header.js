import React from 'react';
import '../css/Header.css';

class Header extends React.Component {

  render() {
    return (
      <header className="header-container">
        <h1>Speedskating Visualizer</h1>
          <div className="nav">
            <ul className="navLinks">
              <li>ABOUT</li>
              <li>CONTACT</li>
            </ul>
          </div>
      </header>
    );
  }
}

module.exports = Header
