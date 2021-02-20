import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";

export class Todo extends React.Component {



    render() {
        return (
            <TableRow key={this.props.i}>
                <TableCell component="th" scope="row">{this.props.text}</TableCell>
                <TableCell align="right">{this.props.priority}</TableCell>
                <TableCell align="right">{this.props.dueDate.format()}</TableCell>
            </TableRow>
        );
    }

}