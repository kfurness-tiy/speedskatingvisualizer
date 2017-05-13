import React, { Component } from 'react'


class Records extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateLandingPage", {Page: "records"})
  }

  render() {
    return (
      <div className="page page4">
      <h1>RECORDS</h1>
      </div>
    )
  }

}

module.exports = Records
