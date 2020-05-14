import React, {Component, Fragment} from "react";
// import Data from './Data';

class Input extends Component {
    constructor (props){
        super(props);
        this.state ={
            inputText:"",
            newText:"",
            list: []
        }
    }

    handleBtnClick = ()=> {
          // this.setState({newText:this.state.inputText}) ;  
          // const list =[...this.state.list];
          // const list =[].this.state.list;
          // const list =this.state.list.slice();
          // list.state.push({
          //     text:this.state.inputText
          //   });
              this.setState({
                list:[...this.state.list, {text:this.state.inputText}],
                inputText:""
              });
      }

    handleInputChange =(e) =>{
      const nextState ={
        inputText:e.target.value,
      };

     if(this.state.newText){
      nextState.newText ="";
    } 
     this.setState(nextState);
    }


   
    render (){
        // const list = this.state.list.map((el,index)=> <p key="index">{el.text}</p>);
   
        let showButton = false;
        if(this.state.inputText){
          showButton=true;
        }

        // console.log(showButton)
        return(
            <Fragment>
                 <input
                 type="text"
                 value={this.state.inputText}
                onChange ={this.handleInputChange}
               />
               {/* {
                 showButton ?
                 <input
                 type="button"
                 value="Click to change"
                 onClick={this.handleBtnClick(15)}
               /> :
               null
                
               } */}

{
                 showButton  &&
                 <input
                 type="button"
                 value="Click to change"
                 onClick={this.handleBtnClick}
               /> 
                
               }
         
            {/* <Data text={this.state.newText}    />
            {list} */}

            

            {
              this.state.list.map((el,index)=> <p key={index}>{el.text}</p>)
            } 

          </Fragment>
        );
    
    }
}



export default Input;
