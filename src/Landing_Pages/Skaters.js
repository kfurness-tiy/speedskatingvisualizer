import React, { Component } from "react";
import "../css/Skaters.css";

class Skaters extends Component {
  render() {
    return (
      <div className="pageSkaters">
        <h1>SKATER SEARCH</h1>
        <form className="skaterSearch" action="index.php?=21" method="post">
          <div className="country ">
            <label>Country </label>
            <select name="n">
              <option value="9999">ALL</option>
              <option value="47">ARG-Argentina</option>
            </select>
          </div>
          <div className="gender">
            <label>Ladies/Men </label>
            <select name="g">
              <option value="9999" selected="selected">ALL</option>
              <option value="0">Ladies</option>
              <option value="1">Men</option>
            </select>
          </div>
          <div className="given">
            <label>Given Name </label>
            <input type="text" name="fn" value maxlength="60" size="40" />
          </div>
          <div className="family">
            <label>Family Name </label>
            <input type="text" name="ln" value maxlength="60" size="40" />
          </div>
          <div className="submit">
            <button type="submit" value="Select">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

module.exports = Skaters;
