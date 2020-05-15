import React  from "react";

const Task = props => 

{ return (
    <>
<p className="task-view">{props.task}</p>
<button className="task-del-btn" onClick= {props.deleteFromChild}>x</button>
</>
)

}

// class Task extends Component {

//     deleteFromChild = id => this.props.removeTask(id);
    

//     render (){

        
//         return (
//         <>
//         <p  className="task-view">{this.props.task}</p>
//         <button className="task-del-btn" onClick= {this.props.deleteFromChild}>x</button>
//         </>
//         )
//     }

// }


export default Task;