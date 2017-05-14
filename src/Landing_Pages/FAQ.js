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
          <p>The platform is intended so that athletes can track their progress with graphical interfaces to help them realize the performance goals and see trends in their times at various distances.</p>
          <h3>What are those two and three character codes following a skater's name?</h3>
          <p>The first letter indicates if the skater is male or female (M for men, L for ladies). The remaining portion is the skater's age category. The categories are based on the skater's age at the start of the season.</p>
          <div className="tableCont">
            <div className="firstTable">
              <tr>
                <td>AGE</td>
                <td>CODE</td>
              </tr>
              <tr>
                <td>7 and under</td>
                <td>YF (Youth)</td>
              </tr>
              <tr>
                <td>8</td>
                <td>YE</td>
              </tr>
              <tr>
                <td>9</td>
                <td>YD</td>
              </tr>
              <tr>
                <td>9</td>
                <td>YD</td>
              </tr>
              <tr>
                <td>10</td>
                <td>YC</td>
              </tr>
              <tr>
                <td>11</td>
                <td>YB</td>
              </tr>
              <tr>
                <td>12</td>
                <td>YA</td>
              </tr>
              <tr>
                <td>13</td>
                <td>C1 (Juniors)</td>
              </tr>
              <tr>
                <td>14</td>
                <td>C2</td>
              </tr>
              <tr>
                <td>15</td>
                <td>B1</td>
              </tr>
              <tr>
                <td>16</td>
                <td>B2</td>
              </tr>
              <tr>
                <td>17</td>
                <td>A1</td>
              </tr>
              <tr>
                <td>18</td>
                <td>A2</td>
              </tr>
              <tr>
                <td>19</td>
                <td>N1 (Neo-Seniors)</td>
              </tr>
              <tr>
                <td>20</td>
                <td>N2</td>
              </tr>
              <tr>
                <td>21</td>
                <td>N3</td>
              </tr>
              <tr>
                <td>22</td>
                <td>N4</td>
              </tr>
            </div>
            <div className="secondTable">
              <tr>
                <td>AGE</td>
                <td>CODE</td>
              </tr>
              <tr>
                <td>23 - 28</td>
                <td>SA (Seniors)</td>
              </tr>
              <tr>
                <td>29 - 33</td>
                <td>30 (Masters)</td>
              </tr>
              <tr>
                <td>34 - 38</td>
                <td>35</td>
              </tr>
              <tr>
                <td>39 - 43</td>
                <td>40</td>
              </tr>
              <tr>
                <td>44 - 48</td>
                <td>45</td>
              </tr>
              <tr>
                <td>49 - 53</td>
                <td>50</td>
              </tr>
              <tr>
                <td>54 - 58</td>
                <td>55</td>
              </tr>
              <tr>
                <td>59 - 63</td>
                <td>60</td>
              </tr>
              <tr>
                <td>64 - 68</td>
                <td>65</td>
              </tr>
              <tr>
                <td>69 - 73</td>
                <td>70</td>
              </tr>
              <tr>
                <td>74 - 78</td>
                <td>75</td>
              </tr>
              <tr>
                <td>79 - 83</td>
                <td>80</td>
              </tr>
              <tr>
                <td>84 - 88</td>
                <td>85</td>
              </tr>
              <tr>
                <td>89 - 93</td>
                <td>90</td>
              </tr>
              <tr>
                <td>94 -98</td>
                <td>95</td>
              </tr>
              <tr>
                <td>99 and up</td>
                <td>00</td>
              </tr>
            </div>
          </div>
          <p>For senior and younger skaters the categories are based on those used by KNSB, the Dutch federation. The Masters age categories reflect the IMSSC definition of racing age as being the age reached at any point during the season (1 July - 30 June of the next year).</p>
          <p>Since the age categories are calculated from a skater's date of birth, it is not possible to compute them if that information is not in the database. In those cases the category will be a question mark (M? or L?).</p>
      </div>
    )
  }

}

module.exports = FAQ
