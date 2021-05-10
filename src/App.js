
import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Components/Layout/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/Pages/About';

// import uuid from 'uuid';
import {v4 as uuid} from 'uuid'


class App extends Component {
 state ={
   todos:[
  //    {
  //    id:uuid(),
  //    title:"Wash the clothes",
  //    completed: false
  //  },
  //    {
  //    id:uuid(),
  //    title:"Take bath",
  //    completed: false
  //  },
  //    {
  //    id:uuid(),
  //    title:"Cook Food",
  //    completed: false
  //  },
  //    {
  //    id:uuid(),
  //    title:"Go to Gym",
  //    completed: false
  //  }
  ],
  TodosDate:[],
  date:[]
 }
 markComplete=(id)=>{
  this.setState({todos:this.state.todos.map(todo=>{
    if (todo.id===id){
      todo.completed = !todo.completed
    }
    return todo
  })
  })
}
componentDidMount() {
  this.getDate();
  
  }
getDate = () => {
  // var date = new Date().toDateString();
  // var date = new Date();
  var today = new Date(),
          date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

  this.setState({ date:[...this.state.date,date]});
  };
getDelet=(id)=>{
  this.setState({todos:[...this.state.todos.filter(todo =>todo.id !== id)]

  });
}
AddTodo=(title)=>{
  const newTodo={
    id:uuid(),
    title:title,
    completed:false,
    // date:date
    
    

  }
  this.setState({todos:[...this.state.todos,newTodo]});
}


AddDateForTodo=(date)=>{
  this.setState({TodosDate:[...this.state.TodosDate,date]})
}
 render(){
  // console.log({this.state.todos})
  console.log(this.state.todos)
  // console.log(this.props.date)
  // console.log(this.state.TodosDate)
  return (
       
    <Router>
      <div>
        <div className='container'>
          
          <Header/>
          <Route exact path='/' render={props=>(
            <React.Fragment>
              <AddTodo AddTodo={this.AddTodo} AddDateForTodo={this.AddDateForTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} 
              getDelet={this.getDelet} Date={this.state.TodosDate} currentDate={this.state.date}/>  
              
            </React.Fragment>
          )}/>
            <Route path="/About" component={About}/>
        </div>
      </div>

    </Router>
      
    
  )};
            }

export default App;
