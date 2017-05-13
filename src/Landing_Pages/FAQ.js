import React, { Component } from 'react'


class FAQ extends Component {

  // componentWillMount() {
  // this.props.eventEmitter.emit("navigateLandingPage", {Page: "faq"})
  // }

  render() {
    return (
      <div className="pageFAQ">
      <h1>Frequently Asked Questions</h1>
      <h3>What is Speedskating Visualizer?</h3>
      <p> Speedskating Visualizer was started to allow athletes to view their skating times in a visually pleasing easy to use platform. The platform is intended so that athletes can track their progess with graphical interfaces to help them realize the performance goals and see trends in their times at various distances.</p>
      </div>
    )
  }

}

module.exports = FAQ
