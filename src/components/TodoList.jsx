import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../actions/TodoList";
import Counter from "./Counter";

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            newTodoText: ""
        }
    }

    addNewTodo = () => {
        this.props.addTodo(this.state.newTodoText);
        this.setState({ newTodoText: "" });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.text}</li>
                    ))}
                </ul>
                <Counter />

                <input type="text"
                    value={this.state.newTodoText}
                    onChange={(e) =>
                        this.setState({ newTodoText: e.target.value })} />
                <button onClick={this.addNewTodo}>Novo Todo</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);