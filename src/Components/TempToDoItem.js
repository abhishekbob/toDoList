import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateInReact from './DateInReact';
import './TempToDoItem.css'

export class TempTodoItem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
              DueNow:'',
              Due:false,
              Message:''
        }
    }
    
    getStyle=()=>{
        return{
            background: '#f1f1f1',
            padding:'1px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none',
            border:this.state.Due ? 'solid yellow' : 'solid black',
            fontSize:'20px ',
            fontWeight:'800',
            background:'#a39d9d',
            margin:'15px 1px',
            borderWidth:'thick'
            
        }

    }
    getStyle1=()=>{
        return{
         
            color:this.state.Due ?  'red' : 'none',
            margin:'15px'
            
        }

    }
    styleForItem=(Message)=>{
        this.setState({DueNow:[...this.state.DueNow,Message]})

    }
    componentDidMount(date) {
        
        // this.getDate();
        this.dateCompare(date);
       
        // this.props.styleForItem(this.state.Message);
        }
    dateCompare=(date,id)=>{
        var taskDate= new Date(this.props.Date);
        let currentDate=new Date (this.props.currentDate);
        var Message=''
        console.log(currentDate,'Current date')
        console.log(taskDate,'taskDate')
        if(taskDate < currentDate){
            Message="Due date is passed for the above Task"
            this.setState({Message});
            this.setState({Due:!this.state.Due});
            // e.preventDefault();
            // this.props.AddTodo(this.state.title);
            // this.props.AddDateForTodo(this.state.date);
            
            
        }
    }
   
    render() {
        const { date } = this.state;
        const{title,id}=this.props.todo
        const Date=this.props.Date
    
        return (
            <>
            <div style={this.getStyle()}>
                <p>
                    <input style={{width:'20px',height:'20px'}} type="checkbox" onChange={this.props.markComplete.bind(this,id,title)} /> {" "}
                    <span className='title'>{title}</span> 
                    <button className='button' onClick={this.props.getDelet.bind(this,id)} style={btStyle}>x</button>
                    <div className='text'>{"This task should be completed on or before"} {this.props.Date}</div>
                    
                   
                   
                </p>
            
            </div>
            <form  >
            <div id='target' style={this.getStyle1()}>
                <div>{date}</div>
            
            

                {'  '} <div className='blink'style={{textDecoration:'none'}}> {this.state.Message}     </div>   
                 
            
           
            </div>
             
            </form>
            </>
            
           
        )
    }
}

const btStyle={
    background:'#ff0000',
    color:'#fff',
    padding:'3px 8px',
    borderRadius:"50%",
    float:'right',
    fontSize:'20px',
    marginRight:'10px',
    
   

}
// TempToDoItem.propTypes={
//     todo:PropTypes.object.isRequired
//   }
  

export default TempTodoItem
