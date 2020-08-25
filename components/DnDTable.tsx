import { AgGridReact } from "ag-grid-react";
import React, { Component } from "react";
import { render } from "react-dom";

import { Box } from "@material-ui/core";

class GridExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        {
          field: 'athlete',
          rowDrag: true,
        },
        { field: 'country' },
        {
          field: 'year',
          width: 100,
        },
        { field: 'date' },
        { field: 'sport' },
        { field: 'gold' },
        { field: 'silver' },
        { field: 'bronze' },
      ],
      defaultColDef: {
        width: 170,
        sortable: true,
        filter: true,
      },
      rowData: [],
    };
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    const httpRequest = new XMLHttpRequest();
    const updateData = (data) => {
      this.setState({ rowData: data });
    };

    httpRequest.open(
      'GET',
      'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json'
    );
    httpRequest.send();
    httpRequest.onreadystatechange = () => {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        updateData(JSON.parse(httpRequest.responseText));
      }
    };
  };

  render() {
    return (
      <section>
        <div
          id="dataGrid"
          style={{
            height: '100vw',
            minHeight: '100vw',
            width: '100%',
          }}
          className="ag-theme-alpine-dark"
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowDragManaged={true}
            animateRows={true}
            onGridReady={this.onGridReady}
            rowData={this.state.rowData}
          />
        </div>
      </section>
    );
  }
}

export default GridExample;
