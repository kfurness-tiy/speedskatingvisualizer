import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
// import Visualizer from './components/Visualizer';
// import Stats from './components/Stats';
import { EventEmitter } from 'events'
import Home from './Landing_Pages/Home'
import Results from './Landing_Pages/Results'
import Skaters from './Landing_Pages/Skaters'
import Records from './Landing_Pages/Records'
import Season from './Landing_Pages/Season'
import Extras from './Landing_Pages/Extras'
import FAQ from './Landing_Pages/FAQ'
import './css/App.css';

class App extends Component {

  constructor(props) {
  super(props)
  this.state = {
    Page: 1
  }
}

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateLandingPage", ({Page}) => {
      this.updatePage({newLandingPage: Page})
    })
  }

  updatePage({newLandingPage}) {
    this.setState({Page: newLandingPage})

    console.log(newLandingPage);
  }

  setCurrentPage() {

    switch (this.state.Page) {
      case "home":
        console.log("Home Yo");
        return <Home/>
        // break;
      case "results":
        console.log("Results Yo");
        return <Results/>
        // break;
      case "skaters":
        console.log("Skaters Yo");
        return <Skaters/>
        // break;
      case "records":
        console.log("Records Yo");
        return <Records/>
        // break;
      case "season":
        console.log("Season Yo");
        return <Season/>
        // break;
      case "extras":
        console.log("Extras Yo");
        return <Extras/>
        // break;
      case "faq":
        console.log("FAQ Yo");
        return <FAQ/>
        // break;
      default:
        console.log("Home Yo");
        return <Home/>
    }
  }

  render() {
    const currentPage = this.setCurrentPage();
    console.log("inside render", currentPage)

    return (
      <div className="App">
        <div className="Header">
          <Header
          eventEmmiter={this.eventEmmiter}
          landingPage={this.state.Page}/>
        </div>
        <div className="Main">
          <div className="Sidebar">
            <Sidebar
              eventEmitter={this.eventEmitter}
              landingPage={this.state.Page}/>
          </div>
          <div className="Data">
            {/*Home />*/}
            {/*Results />*/}
            {/*Skaters />*/}
            {/*Records />*/}
            {/*Season />*/}
            {/*Extras />*/}
            <FAQ />
            {/*<Stats />*/}
            {/*<Visualizer />*/}
          </div>
        </div>
        <div className="Bottom">
          <Footer
            eventEmmiter={this.eventEmmiter}
            pageIndex={this.state.Page}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter basename="/">
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
