import React from 'react';
import {TodoList} from "./TodoList";
import moment from "moment";
import {Button, TextField} from "@material-ui/core";
import DatePicker from "react-datepicker";

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], text: '', priority: 0, dueDate: moment()};
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    render() {

        return (

            <div className="App">

                <form className="todo-form">
                    <h3>New TODO</h3>
                    <TextField id="text"
                               onChange={this.handleTextChange}
                               value={this.state.text}
                               label="Text"
                               variant="outlined"
                               size={"small"}/>

                    <br/>
                    <br/>

                    <TextField id="priority"
                               onChange={this.handlePriorityChange}
                               value={this.state.priority}
                               className="right-margin"
                               label="Priority"
                               variant="outlined"
                               size={"small"}
                               type="number"/>

                    <br/>
                    <br/>

                    <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due date"
                        onChange={this.handleDateChange}>
                    </DatePicker>
                    <br/>
                    <br/>


                    <Button variant="contained" onClick={this.handleSubmit}>Add #{this.state.items.length + 1}
                    </Button>


                </form>
                <br/>
                <br/>
                <TodoList todoList={this.state.items}/>
            </div>
        );
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {
        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(date) {
        this.setState({
            dueDate: date
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: moment()
        }));
    }
}