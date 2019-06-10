import React, { Component } from 'react';

export default class Columns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: props.selectedRow,
            column: props.column,
            data: props.data
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            selectedRow: props.selectedRow,
            column: props.column,
            data: props.data
        });
    }

    render() {
        const { data, column, selectedRow } = this.state;
        return(
            <div className="column">
                { column.map((item, index) => (
                    <div className={(selectedRow==index)?'table-cell active':'table-cell'} style={item.style} >
                        {(item.unit!="self")?item.unit:''}{data[item.id]}{(item.unit=='self')?data['unit']:''}
                    </div>
                ))}
            </div>
        )
    }
}