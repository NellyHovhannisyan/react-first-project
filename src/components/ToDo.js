import React, { Component, Fragment } from "react";
import Task from './Task';
import {idGen} from '../utils';

class ToDo extends Component {
   state = {
            inputVal: "",
            tasks: []
        }
    

    handleInputChange = e =>{
     
        this.setState({inputVal:e.target.value })
}
     handleBtnClick = () =>{
         const inputVal = this.state.inputVal;
         if(!inputVal) return

        this.setState(
            {
                tasks:[...this.state.tasks, {task:inputVal, id:idGen()}],
                inputVal:""
            }
        );
      
     }

     removeTask = (id)=> {
        const delArr = this.state.tasks.filter(item => item.id !== id);
        this.setState({tasks: delArr});
};


    render() {
      
        const newTaskList=this.state.tasks.map((el)=>{

            return (
                <div key={el.id}>
                <Task deleteFromChild={() => this.removeTask(el.id)} task={el.task}/>
                {/* <button className="task-del-btn" onClick= {() => this.removeTask(el.id)}>x</button> */}
            </div>
            )
        });
   
        return (
            <Fragment>
                <input
                    type="text"
                    value={this.state.inputVal}
                    onChange={this.handleInputChange}
                />
                <button
                onClick={this.handleBtnClick}
                >Click to add task</button>
               <div className="task-list"> {newTaskList}</div>
            </Fragment>

        )

    }

}


export default ToDo;