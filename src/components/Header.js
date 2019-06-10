import React, { Component } from 'react';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            header: props.header,
            selectedRow: props.selectedRow,
        }

        this.selectRow = this.selectRow.bind(this);
        this.moveRow = this.moveRow.bind(this);
    }

    componentWillReceiveProps(props) {
        this.setState({
            header: props.header,
            selectedRow: props.selectedRow
        });
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did updated');
    }

    selectRow(index) {
        // this.setState({
        //     selectedRow: index,
        // });
        this.props.selectRow(index);
    }

    moveRow(e, index) {
        if(this.state.selectedRow == index) {
            console.log("movement action on selected row - ")
            console.log(e.movementX);
        }
    }

    render() {
        const { header, selectedRow } = this.state;
        return (
            <div className="app-header">
                { header.map( (item, index) => (
                    <div className={(selectedRow==index)?'table-cell active': 'table-cell'} onMouseDown={(e) => this.selectRow(index)} onMouseMove={(e) => this.moveRow(e, index)} style={{width: item.style.width, textAlign: item.style.textAlign}}>{item.title}</div>
                ))}
            </div>
        )
    }
}