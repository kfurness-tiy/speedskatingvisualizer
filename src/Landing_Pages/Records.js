import React, { Component } from 'react'
import '../css/Records.css';
import axios from 'axios';

class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  componentDidMount() {
    axios.get(`http://speedskatingresults.com/api/json/olympic_records.php${this.props.olympic_records}.json`)
      .then(res => {
        const records = res.data.data.children.map(obj => obj.data);
        this.setState({ records });
      });
  }


  render() {
    return (
      <div className="pageRecords">
      <h1>RECORDS</h1>
        <ul>
          {this.state.records.map((record, i) =>
            <li key={i}>{record.gender}</li>
          )}
        </ul>
      </div>
    );
  }

}

module.exports = Records
