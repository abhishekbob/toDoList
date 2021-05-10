import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DateInReact from './DateInReact';

export class Todoitem extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
              DueNow:'',
        }
    }
    
    getStyle=()=>{
        return{
            background: '#f1f1f1',
            padding:'1px',
            borderBottom:'1px #ccc dotted',
            textDecoration:this.props.todo.completed ? 'line-through' : 'none',
            
        }

    }
    styleForItem=(Message)=>{
        this.setState({DueNow:[...this.state.DueNow,Message]})

    }
   
    render() {
        const{title,id}=this.props.todo
        const Date=this.props.Date
        console.log(this.props.Date,'task date')
        console.log(this.props.currentDate,'curret date')
        console.log(this.state.DueNow,'Duenow')
        console.log(this.props.Message,'Due')
        console.log(this.props.styleForItem,'styleForItem')
        
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id,title)} /> {" "}
                    {title} {" "}{" "}{" "}
                    <button onClick={this.props.getDelet.bind(this,id)} style={btStyle}>x</button>
                   {"Task should be completed on "} {this.props.Date}
                    <div> 
                        <DateInReact DateofTask={this.props.Date} date={this.props.currentDate} styleForItem={this.styleForItem}/>
                    </div>
                </p>
            </div>
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
Todoitem.propTypes={
    todo:PropTypes.object.isRequired
  }
  

export default Todoitem
