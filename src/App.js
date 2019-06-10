import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import { Grid, Table, TableHeaderRow, TableColumnResizing, TableColumnReordering, DragDropProvider } from '@devexpress/dx-react-grid-material-ui';

function numberWithSpaces(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function numberWithDot(x) {
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(".");
}

const LeftAlignCell = ({value, style, ...restProps}) => (
  <Table.Cell {...restProps}
    style={{textAlign: "left", fontSize: "17px", style}}>
      ${numberWithSpaces(value)}
  </Table.Cell>
)

const BlueRightAlignCell = ({value, style, ...restProps}) => (
  <Table.Cell {...restProps}
    style={{color: "#2692f9", textAlign: "left", fontWeight: "bold", fontSize: "17px", style}}>
      ${numberWithDot(value)}
  </Table.Cell>
)

const AfterUnitCell = ({value, style, ...restProps}) => (
  <Table.Cell {...restProps}
    style={{ fontSize: "17px", style}}>
      {numberWithSpaces(value)}
  </Table.Cell>
)

const ConditionColor = ({value, style, ...restProps}) => (
  <Table.Cell {...restProps}
    style={{style, fontSize: "17px", color: (value < 0)?'red':'green'}}>
      {value}%
  </Table.Cell>
)

const LogoCell = ({value, style, ...restProps}) => (
  <Table.Cell {...restProps}
    style={{fontWeight: "bold", fontSize: "17px", style}}>
      <img src={logo} className="logo" />{value}
  </Table.Cell>
)

const Cell = (props) => {
  const { column } = props;
  if(column.name === "marketCap" || column.name === "volume") {
    return <LeftAlignCell {...props} />
  } else if(column.name === "price") {
    return <BlueRightAlignCell {...props} />
  } else if(column.name === "circulatingSupply") {
    return <AfterUnitCell {...props} />
  } else if(column.name === "change") {
    return <ConditionColor {...props} />
  } else if(column.name === "name") {
    return <LogoCell {...props} />
  } else {
    return <Table.Cell {...props} />
  }
}

function App() {
  var state = {
    dummyData: [
      {
          no: 1,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: -5.73,
          icon: ''
      },
      {
          no: 2,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: -5.73,
          icon: ''
      },
      {
          no: 3,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: 5.73,
          icon: ''
      },
      {
          no: 4,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: -5.73,
          icon: ''
      },
      {
          no: 5,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: 8.73,
          icon: ''
      },
      {
          no: 6,
          name: 'Bitcoin',
          marketCap: '14983093484',
          price: 8893.83,
          circulatingSupply: "39848392839 BTC",
          unit: 'BTC',
          volume: 394950299910,
          change: -5.73,
          icon: ''
      },
    ],
    column: [
      {
        name: 'no',
        title: '#'
      },
      {
        name: 'name',
        title: 'NAME'
      },
      {
        name: 'price',
        title: 'PRICE'
      },
      {
        name: 'marketCap',
        title: 'MARKET CAP'
      },
      {
        name: 'circulatingSupply',
        title: 'CIRCULATING SUPPLY'
      },
      {
        name: 'volume',
        title: 'VOLUME (24H)'
      },
      {
        name: 'change',
        title: '% CHANGE (24H)'
      }
    ],
    defaultColumnWidths: [
      { columnName: 'no', width: 50},
      { columnName: 'name', width: 150},
      { columnName: 'price', width: 150},
      { columnName: 'marketCap', width: 200},
      { columnName: 'circulatingSupply', width: 200},
      { columnName: 'volume', width: 200},
      { columnName: 'change', width: 200},
    ]
  }

  const componentDidMount = () => {
    var classList = ReactDOM.findDOMNode(this).querySelector('thead').classList;

    classList.add('app-header');
  };

  return (
    <div className="container">
      <Grid
        rows={state.dummyData}
        columns={state.column}
      >
        <DragDropProvider />
        <Table className="app-header" cellComponent={Cell}/>
        <TableColumnResizing defaultColumnWidths={state.defaultColumnWidths} />
        <TableColumnReordering defaultOrder={['no', 'name', 'price', 'marketCap', 'circulatingSupply', 'volume', 'change']} />
        <TableHeaderRow />
      </Grid>
    </div>
  );
}

export default App;
