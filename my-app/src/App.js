import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.afterChange = this.afterChange.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
    this.clearFunction = this.clearFunction.bind(this);
    this.state = {tasks: [], text: ''};
  }

  render() {
    return (
      <div>

        <h2>ToDo</h2>
        <form onSubmit={this.afterSubmit}>
          <input onChange={this.afterChange} value={this.state.text} />
          <button>{'Add Task'}</button>
        </form>
          <input type="button" id="clear" value="Clear" onclick="alert('AAAA')"  /> // dlaczego ten przycisk nie działa?
          <form onSubmit={this.clearFunction}><button>{'Clear 2'}</button></form>

         <TaskList tasks={this.state.tasks} /> 
      </div>
    );      // jak ta classa TodoList jest wywoływana? co to za składnia?
  }

  afterChange(letter) {
    this.setState({text: letter.target.value});

  }

  afterSubmit(task) { //dlaczego tutaj trzeba przerwać domyślną akcję?
    task.preventDefault(); // czemu przycisk tak jakby naciskał sie sam w form onSubmit
    var newTask = {
      text: this.state.text, //co to znaczy i dlaczego jak się napisze samo this.state.text to się odświerza i kasuje task
    };
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask),
      text: ''
    }));
  }

  clearFunction(){
    location.reload(); //dlaczego ta funkcja działa prawdidłowo dopiero gdy wywołuje ją poprzez inną funkcje?
  }
}

class TaskList extends React.Component { // czemu to musi być osobna klasa a jak się jej zawartość da bezpośrednio to program nie działa
  render() {
    return (
      <ul>
        {this.props.tasks.map(task => (
          <li><label>{task.text} <input type="checkbox"/> </label></li>
        ))}
      </ul>
    );
  }
}

export default App;
// jak zrobić pętle w react