import React, { Component } from 'react'


class Extras extends Component {

  componentWillMount() {
  this.props.eventEmitter.emit("navigateLandingPage", {Page: "extras"})
  }

  render() {
    return (
      <div className="pageExtras">
      <h1>EXTRAS</h1>
      </div>
    )
  }

}

module.exports = Extras
