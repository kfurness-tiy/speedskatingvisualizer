import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {

  render() {
    return (
      <footer className="footer-container">
        <div className="content">
          <button className="top">Back to Top</button>
          <h4>Copyright 2017 Robert Johnson</h4>
        </div>
      </footer>
    );
  }
}

module.exports = Footer
