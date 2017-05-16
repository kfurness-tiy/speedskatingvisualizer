import React, { Component } from 'react'
import '../css/Records.css';
import axios from 'axios';

class Record extends Component {

  render() {
    let { record } = this.props;
      return (
        <table className="OlyRecordSkatersFemale">
        <h2>Ladies</h2>
          <tbody>
            <thead>
            </thead>
            <tr>
              <td>{record.date}</td>
              <td>{record.location}</td>
              <td>{record.skater.country}</td>
              <td>{record.skater.givenname} {record.skater.familyname}</td>
              <td>{record.time}</td>
              <td>{record.distance}</td>
            </tr>
          </tbody>
        </table>
    )
  }

}

class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
  }

  componentDidMount() {
    axios.get(`http://speedskatingresults.com/api/json/olympic_records`)
    .then(response => {
        console.log(response.data.records)
        this.setState({ records: response.data.records})
      });
  }


  render() {
    return (
      <div className="pageRecords">
      <h1>OLYMPIC RECORDS</h1>
          {this.state.records.map((record, i) =>
            <Record key={i} record={record}/>
          )}
      <h2>Men</h2>
      </div>
    );
  }

}

module.exports = Records
