import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer-container">
        <div className="content">
          <button className="top">Back to     Top</button>
        </div>
        <h4>Copyright 2017 Robert Johnson</h4>
      </footer>
    );
  }
}

module.exports = Footer
