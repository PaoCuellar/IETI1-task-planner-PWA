import React from 'react';
import {Todo} from './Todo';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

export class TodoList extends React.Component {



    render() {
        const todoList = this.props.todoList.map((todo, i) => {
            return (
                <Todo i={i} text={todo.text} priority={todo.priority} dueDate={todo.dueDate}/>
            );
        });

        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align={"center"}>Task</TableCell>
                            <TableCell align={"center"}>Priority</TableCell>
                            <TableCell align={"center"}>Due Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todoList}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}