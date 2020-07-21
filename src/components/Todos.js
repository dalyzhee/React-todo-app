import React from 'react';
import Todoitems from './Todoitems';
import PropTypes from 'prop-types';

class Todos extends React.Component{
    render(){
        console.log(this.props.todos)
    return this.props.todos.map((todo) => (
        <Todoitems key={todo.id} todo={todo} markComplete = {this.props.markComplete} delTodo = {this.props.delTodo} />

    ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
