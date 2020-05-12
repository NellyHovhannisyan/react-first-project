import React, {Component} from "react";
import Data from './Data';

class Input extends Component {
    constructor (props){
        super(props);
        this.state ={
            inputText:"",
            newText:""
        }
    }

    handleBtnClick = (text)=> {
        this.setState({newText:this.state.inputText}) ;
        console.log(text);  

      }

    handleInputChange =(e) =>{
     
        this.setState({inputText:e.target.value })
}

    render (){
        return(
            <div>
                 <input type="text"
                onChange ={this.handleInputChange}
               />
            <input
              type="button"
              value="Click to change"
              onClick={this.handleBtnClick}
            />
            
            <Data text={this.state.newText}    />
          </div>
        )
    
    }

}



export default Input;