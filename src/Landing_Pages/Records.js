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
    const queryParam = "gender=f"
    axios({
      method:'get',
      url:`http://speedskatingresults.com/api/json/olympic_records?${queryParam}`,
      withCredentials: false,
    })
      .then(response => {
        console.log(response)
        // const records = response.data.data.children.map(obj => obj.data);
        // this.setState({ records });
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
