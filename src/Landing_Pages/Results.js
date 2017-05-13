import React, { Component } from 'react'


class Results extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateLandingPage", {Page: "results"})
  }

  render() {
    return (
      <div className="pageResults">
      <h1>RESULTS</h1>
      </div>
    )
  }

}

module.exports = Results
