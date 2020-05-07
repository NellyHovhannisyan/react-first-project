import React from 'react';
import Search from "./Search";
import 'bootstrap/dist/css/bootstrap.min.css';
import {DropdownButton} from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';


const Fruits = () => {
    
    return(
        <div className = "fruit-menu">
        <Search />
        <DropdownButton  id="dropdown-basic-button" title="Banana🍌">
  <Dropdown.Item href="#/action-1">Apple🍎</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Avocado🥑</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Cherries🍒</Dropdown.Item>
</DropdownButton>
        </div>
    )

}

export default  Fruits