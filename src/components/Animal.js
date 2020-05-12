import React, {Component} from "react";

class Animal extends Component{
    constructor (props){
        super(props);
        this.state ={
            age:props.age,
            inputText: ''
        }
    }
        handleClick = () =>{
            console.log('click');
            this.setState({age:this.state.age + 1  });
            console.log(this.state.age)
        }

        handleInputChange =(e) =>{
     
                this.setState({inputText:e.target.value })
        }
        
        render (){
            return (
                <div
                onClick={ this.handleClick}
                >Hello I'm Doggy and I'm a {this.props.type}
                <p> I'm  {this.state.age} years old</p>
                <input type="text"
                onChange ={this.handleInputChange} />
            <p>{this.state.inputText}</p>
              
                 </div>

            )
        }
}

export default Animal;