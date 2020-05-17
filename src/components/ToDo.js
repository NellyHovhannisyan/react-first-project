import React, { Component, Fragment } from "react";
import Task from './Task';
import {idGen} from '../utils';
import NewTask from './Newtask';

class ToDo extends Component {
   state = {
  
            tasks: [],
            checkedTasks:[],
          
        }
    

 
     addTask = (inputText) =>{      

        this.setState(
            {
                tasks:[...this.state.tasks, {task:inputText, id:idGen()}],
              
            }
        );
      
     }

     removeTask=(taskId)=>()=> {
        // const delArr = this.state.tasks.filter(item => item.id !== id);
        const newTasks = this.state.tasks.filter(({id}) => taskId !== id);
        this.setState({tasks: newTasks});
};

handleCheckBox =( isChecked,id)=>()=>{
    isChecked ?     console.log("checked",id)
    : console.log('not checked',id);
        
    
};


    render() {
      
        const newTaskList=this.state.tasks.map(({id,task,isChecked})=>{
            return (    
                <Task  key={id}
                 deleteFromChild={this.removeTask(id)}
                  task={task}
                  checkCheckBox = {this.handleCheckBox(isChecked ,id)}
                  />
         
            )
        });
   
        return (
            <Fragment>
                <NewTask
                onTaskAdd ={this.addTask}
                />
                <div className="task-list"> {newTaskList}</div>       
            </Fragment>

        )

    }

}


export default ToDo;