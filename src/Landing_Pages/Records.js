import React, { Component } from "react";
import "../css/Records.css";
import axios from "axios";
import RecordTable from "../components/RecordTable";

// class Record extends Component {
//   render() {
//     let { Record } = this.props;
//     return (
//       <tr>
//         <td>{record.name}</td>
//       </tr>
//     );
//   }
// }

class Records extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: []
    };
    this.handleRecordChange = this.handleRecordChange.bind(this);
  }

  componentWillMount(){
        this.getRecords("world_records");
  }

  handleRecordChange(event) {
    let record = event.target.value;
    this.setState({...record} );
    this.getRecords(record);
  }

  getRecords(records) {
    axios
      .get(`http://speedskatingresults.com/api/json/olympic_records`)
      .then(response => {
        console.log(response.data.records);
        this.setState({ records: response.data.records });
      });
  }

  render() {
    const { records } = this.state;
    const ladiesRecords = records.filter(record => record.gender === "f");
    const mensRecords = records.filter(record => record.gender === "m");
    return (
      <div className="pageRecords">
        <h1>RECORDS</h1>
        <select onChange={this.handleRecordChange}>
          <option value="world_records">World Records</option>
          <option value="olympic_records">Olympic Records</option>
        </select>
        <RecordTable title="LADIES" records={ladiesRecords} />
        <RecordTable title="MEN" records={mensRecords} />
      </div>
    );
  }
}

module.exports = Records;
