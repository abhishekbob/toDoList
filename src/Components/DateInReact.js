
import React from "react";
 class DateInReact extends React.Component {
     constructor(props) {
         super(props)
     
         this.state = {
            Due:false,
            Message:''
         }
        //  const formRef = useRef(null)
     }
     onSubmit=(e)=>{
        e.preventDefault();
        // this.props.AddTodo(this.state.title);
        // this.props.AddDateForTodo(this.state.date);
        this.props.styleForItem(this.state.Message);
        // this.setState({Message:'' });
        }   
      
    componentDidMount(date) {
        
    // this.getDate();
    this.dateCompare(date);
   
    // this.props.styleForItem(this.state.Message);
    }
    getStyle=()=>{
        return{
         
            color:this.state.Due ?  'blue' : 'none',
            
        }

    }
    
    dateCompare=(date,id)=>{
    var taskDate= new Date(this.props.DateofTask);
    let currentDate=new Date (this.props.date);
    var Message=''
    console.log(currentDate,'Current date')
    console.log(taskDate,'taskDate')
    if(taskDate < currentDate){
        Message="Due date is passed"
        this.setState({Message});
        this.setState({Due:!this.state.Due});
        // e.preventDefault();
        // this.props.AddTodo(this.state.title);
        // this.props.AddDateForTodo(this.state.date);
        
        
    }
   
    // dates.compare(taskDate,currentDate)

    };
     render() {
    // console.log(this.props.DateofTask,'Task date')
    console.log(this.props.date)
    console.log(this.props.DateofTask)
    console.log(this.state.Message)
    console.log(this.state.Due)
    
    const { date } = this.state;
        
    return (
        <div >

            <form  >
            <div id='target' style={this.getStyle()}>
            <div>{date}</div>
            

             {'  '}   {this.state.Message}    
            
           
            </div>
             {/* <input type='submit'></input> */}
            </form>
        </div>
        
    )
  }
}


export default DateInReact;
