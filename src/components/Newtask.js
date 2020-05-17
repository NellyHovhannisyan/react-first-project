import React, {Component}  from "react";

class NewTask extends Component  

{
    constructor(props){
        super(props);
        console.log(props);
        
    }

    state ={
        inputText:""
    }

handleInputChange = e =>{
     
        this.setState({inputText:e.target.value })
}

handleBtnClick =() =>{
    const  {inputText} =this.state;
    if(!inputText) return;
    this.props.onTaskAdd(inputText);
    this.setState({inputText:""});
}

    render() {

    return (
    <>
                
                
                <input
                    type="text"
                    value={this.state.inputText}
                    onChange={this.handleInputChange}
                />
                <button
                onClick={this.handleBtnClick}
                >Click to add task</button>

</>
)
    }
}

export default NewTask;