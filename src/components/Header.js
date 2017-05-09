import React from 'react';
import image from '../../public/images/headerImgHome.jpg';

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <h1>Speedskating Visualizer</h1>
          <div ClassName="nav">
            <img src={image} className="banner-image" alt="header image of skater">
            </img>
          </div>
      </header>
    );
  }
}

module.exports = Header
