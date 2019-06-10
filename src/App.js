import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./utils/Utils";

// Import Table
import DraggableTable from "./components/DraggableTable";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }

  render() {
    const { data } = this.state;
    const fieldMap = ["firstName", "lastName", "age", "status"];

    const heads = ["First Name", "Last Name", "Age", "Status"];
    const columns = [
      {
        Header: "First Name",
        accessor: "firstName"
      },
      {
        Header: "Last Name",
        accessor: "lastName"
      },
      {
        Header: "Age",
        accessor: "age"
      },
      {
        Header: "Status",
        accessor: "status"
      }
    ];
    return (
      <div>
        <DraggableTable
          rows={data}
          columns={columns}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}
