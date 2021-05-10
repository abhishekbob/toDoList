
import React, { Component } from 'react';
import TempToDoItem from './TempToDoItem'
import PropTypes from 'prop-types'
import DateInReact from './DateInReact';

class Todos extends Component {
  constructor(props) {
    super(props)
  
   
  }
 render(){
   console.log(this.props.todos)
    console.log(this.props.Date)
  const Date=this.props.Date
  return (
   <div>
 {this.props.todos.map((todo,ind)=>(
    // <h3> {todo.id} </h3>
    
    <TempToDoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
    getDelet={this.props.getDelet} Date={this.props.Date[ind]} currentDate={this.props.currentDate}
    />
    // <Todoitem key={todo.id} todo={todo} markComplete={this.props.markComplete} 
    // getDelet={this.props.getDelet} Date={this.props.Date[ind]} currentDate={this.props.currentDate}
    // />
    
  ))}

 
  
   </div>
  );  
 }
}
Todos.propTypes={
  todos:PropTypes.array.isRequired
}

export default Todos;
