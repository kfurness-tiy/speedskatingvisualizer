import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {

  render() {
    return (
      <sidebar className="sidebar-container">
        <h4>I'm a Sidebar!</h4>
        <div className="homeButton">
          <button>HOME</button>
        </div>
        <div className="resultsButton">
          <button>RESULTS</button>
        </div>
        <div className="skatersButton">
          <button>SKATERS</button>
        </div>
        <div className="recordsButton">
          <button>RECORDS</button>
        </div>
        <div className="seasonButton">
          <button>SEASON</button>
        </div>
        <div className="extrasButton">
          <button>EXTRAS</button>
        </div>
        <div className="faqButton">
          <button>FAQ</button>
        </div>
      </sidebar>
    );
  }
}

module.exports = Sidebar
