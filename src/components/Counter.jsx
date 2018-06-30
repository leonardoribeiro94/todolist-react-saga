import React, { Component } from "react";
import { connect } from "react-redux"

class Counter extends Component {
    render() {
        return (
            <h2>voce tem {this.props.todos.length} todos</h2>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos
});

export default connect(mapStateToProps)(Counter);