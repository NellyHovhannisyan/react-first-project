import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Person from './components/Person';
import Fruits from './components/Fruits';
// import {idGen as idGenerator, Hello, getThis} from './tools';
// import * as newObj from './tools';
import User from './components/User';
import Animal from './components/Animal';
import Input from './components/Input';

// console.log(idGenerator());
// console.log(newObj.Hello());
// newObj.getThis();
// getThis();

function App() {
  
// const {Hello} =newObj; 
// const components =[
//   <p>text1</p>,
//   <p>text2</p>,
//   <p>text3</p>,
// ];
 const surname= 'Gates'
  return (
    
    <div className="App">
      <User name="Bill" surname={surname}/>
      <User name="Joe" surname='Doe'/>
      <User name="Jack" surname='Daniels'/>
      <Animal type="dog" age={0}/> 
      <Input />
      {/* {components[0]}
       <Hello />
      <Person />*/
       <Fruits /> }
    </div>
  );
}

export default App;
