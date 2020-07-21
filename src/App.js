import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodos from './components/AddTodos';

class App extends React.Component{
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Revise Django.',
        completed: true
      },
      {
        id: 3,
        title: 'Go through a project.',
        completed: false
      },
    ]
  }
// mark complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  } 

  // delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // add todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  
  render(){
    return(
      <div className='App'>
        <div className="container">
          <Header />
          <AddTodos addTodo={this.addTodo} />
          <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo = {this.delTodo} />
        </div>
      </div>
    )
  }
}

export default App;
