import React from 'react';
import '../css/Sidebar.css';

class Sidebar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="app-sidebar">
          <button
            className="home-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "home"})
          }}><p>HOME</p></button>
          <button
            className="results-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "results"})
          }}><p>RESULTS</p></button>
          <button
            className="skaters-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "skaters"})
          }}><p>SKATERS</p></button>
          <button
            className="records-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "records"})
          }}><p>RECORDS</p></button>
          <button
            className="season-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "season"})
          }}><p>SEASON</p></button>
          <button
            className="extras-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "extras"})
          }}><p>EXTRAS</p></button>
          <button
            className="faq-page1"
            onClick={(event) => {this.props.eventEmitter.emit("navigateLandingPage", {Page: "faq"})
          }}><p>FAQ</p></button>
      </div>
    )
  }
}

module.exports = Sidebar
