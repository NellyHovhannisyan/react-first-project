import React from 'react';
import Name from './Name';
import Surname from './Surname';

function User (props){
    const {name, surname} = props;
   
    console.log(props);
    return (
     <div>
         Hello Im 
         <Name name={name} />
         <Surname surname={surname} />
     </div>
    )
}

export default User;