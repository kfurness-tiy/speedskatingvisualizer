import React, { Component } from 'react'


class Season extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateLandingPage", {Page: "season"})
  }

  render() {
    return (
      <div className="pageSeason">
      <h1>SEASON</h1>
      </div>
    )
  }

}

module.exports = Season
