import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {

  render() {
    return (
      <sidebar className="sidebar-container">
        <h4>I'm a Sidebar!</h4>
        <div className="homeButton" type="button">
          <button>HOME</button>
        </div>
        <div className="resultsButton" type="button">
          <button>RESULTS</button>
        </div>
        <div className="skatersButton" type="button">
          <button>SKATERS</button>
        </div>
        <div className="recordsButton" type="button">
          <button>RECORDS</button>
        </div>
        <div className="seasonButton" type="button">
          <button>SEASON</button>
        </div>
        <div className="extrasButton" type="button">
          <button>EXTRAS</button>
        </div>
        <div className="faqButton" type="button">
          <button>FAQ</button>
        </div>
      </sidebar>
    );
  }
}

module.exports = Sidebar
