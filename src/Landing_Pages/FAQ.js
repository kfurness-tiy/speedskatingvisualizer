import React, { Component } from 'react'
import '../css/FAQ.css';

class FAQ extends Component {

  // componentWillMount() {
  // this.props.eventEmitter.emit("navigateLandingPage", {Page: "faq"})
  // }

  render() {
    return (
      <div className="pageFAQ">
        <h1>Frequently Asked Questions</h1>
        <h3>What is Speedskating Visualizer?</h3>
          <p> Speedskating Visualizer was started in 2017 to enable long track athletes to view their skating times in a visually pleasing easy to use platform.</p>
          <p>The platform is intended so that athletes can track their progess with graphical interfaces to help them realize the performance goals and see trends in their times at various distances.</p>
          <h3>What are those two and three character codes following a skater's name?</h3>
          <p>The first letter indicates if the skater is male or female (M for men, L for ladies). The remaining portion is the skater's age category. The categories are based on the skater's age at the start of the season (1 July)</p>
          <p>For senior and younger skaters the categories are based on those used by KNSB, the Dutch federation. The Masters age categories reflect the IMSSC definition of racing age as being the age reached at any point during the season (1 July - 30 June of the next year).</p>
          <p>Since the age categories are calculated from a skater's date of birth, it is not possible to compute them if that information is not in the database. In those cases the category will be a question mark (M? or L?).</p>
      </div>
    )
  }

}

module.exports = FAQ
