import React, { Component } from 'react';
import './AddTodo.css'
import DateInReact from './DateInReact';

 class AddTodo extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
            title:'',
            date:[]
            
              
         }
     }
    onChange=(e)=> {
        this.setState({[e.target.name]:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.props.AddDateForTodo(this.state.date);
        this.setState({title:'' });
        this.setState({date:'' });
    }
   
   
   
    render() {
        
        console.log(this.state.title)
        console.log(this.state.date)
        
        return (
            <form onSubmit={this.onSubmit} style={{display:'flex'}}> 
                <input type="text" 
                       name='title' 
                       placeholder='Add to do item' 
                       style={{flex:'10',padding:'10px',fontSize:'20px',fontWeight:'800px'}}
                       value={this.state.title}
                       onChange={this.onChange}>

                </input>
                <input type="date" 
                       name='date' 
                       style={{flex:'10',padding:'10px',fontSize:'20px',fontWeight:'800px'}}
                       value={this.state.date}
                       onChange={this.onChange}>

                </input>
            {/* <DateInReact AddDateForTodo={this.props.AddDateForTodo}/> */}
                <input type="submit"
                       value='Submit' 
                       className='btn' 
                       style={{flex:'6',padding:'10px'}}>

                </input>
                
            </form>
        )
    }
 };

export default AddTodo
