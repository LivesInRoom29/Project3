// Need for React and Redux
import React, { Component } from "react";
import { format } from "date-fns";
// Bootstrap components
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// API calls
//import filterDeleted from "../../utils/filterDeleted";
//import API from "../../utils/API";

//import "../chorelist-tasks/choreListTasks.css"

class DropdownChorelists extends Component {

  render() {
    const filteredChoreList = this.props.choreLists.filter(list => list.completedBy === this.props.householdMemberId);
    return (
      <Form.Group as={Col} md="6" controlId="formChorelists">
        <Form.Label>Pick a chorelist:</Form.Label>
        <Form.Control
          as="select"
          name="choreListToEdit"
          value={this.props.choreListToEdit}
          // placeholder="Wash the dishes"
          onChange={this.props.handleInputChange}
        >
          {/* Map the chorelists to the drop-down */}
          {
              filteredChoreList.map(list => (
              <option
                key={list._id}
                value={list._id}
              >
                {format(new Date(list.date), "MM/dd/yyyy")}
              </option>
            ))
            }
        </Form.Control>
      </Form.Group>
    )
  }
}

export default DropdownChorelists;
