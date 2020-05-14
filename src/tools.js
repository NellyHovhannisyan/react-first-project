 import React from 'react';
 
 function idGen (){
    return Math.random().toString(32).slice(2);
}

 function Hello (){
    console.log(this);
    return (
        <div> "Hello React!"</div>
        );
  
}

function getThis (){
    console.log(this);
}

export{idGen, Hello, getThis};

const greeting = "Hello World";

export default greeting;
