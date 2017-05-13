import React, { Component } from 'react'


class Skaters extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateLandingPage", {Page: "skaters"})
  }

  render() {
    return (
      <div className="pageSkaters">
      <h1>SKATERS</h1>
      </div>
    )
  }

}

module.exports = Skaters
