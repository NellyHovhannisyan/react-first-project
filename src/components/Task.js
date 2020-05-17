import React, { Component } from "react";


class Task extends Component {

    state = {
        isChecked: false
    }

    handleCheckClick = () => {
        const  {isChecked} =this.state;
        this.setState({isChecked: !isChecked})
        this.props.checkCheckBox(isChecked)
    }


    render() {

          
            
        return (
            <>
                <div>
                    <input
                        className="task-checkbox"
                        type="checkbox"
                        checked={this.state.isChecked}
                        onChange={this.handleCheckClick}
                    />
                    <p className="task-view">{this.props.task}</p>
                    <button className="task-del-btn" onClick={this.props.deleteFromChild}>x</button>
                </div>
            </>
        )
    }

}


// const Task = props => {
//     const { task, deleteFromChild, checkedTask } = props;
//     return (
//         <>
//             <div>
//                 <input
//                     className="task-checkbox"
//                     type="checkbox"
//                     onChecked = {checkedTask}
//                     // onChange = {onChangeHandleCheckbox}
//                 />
//                 <p className="task-view">{task}</p>
//                 <button
//                     className="task-del-btn"
//                     onClick={deleteFromChild}
//                 >
//                     x
//     </button>
//             </div>
//         </>
//     )

// }



export default Task;