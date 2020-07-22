import React from 'react';

import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import './TodoList.css';



const Todoitem =(props)=>{
    const HandleClick=()=>{
        props.ItemDelete(props.index)
    }

    return (
        <form>
         <div style={{marginLeft:'0px'}}>
             <li>
                 <Box borderBottom={1}>
                  <span ><b>{props.content}</b></span>
                  <span style={{marginLeft:"200px"}}>
                      <Select labelId="label" id="select" >
                          <MenuItem value="Not Started">Not Started</MenuItem>
                          <MenuItem value="In Progress">In Progress</MenuItem>
                          <MenuItem value="Completed">Compeleted</MenuItem>
                      </Select></span>
                  <span style={{marginLeft:"200px"}}><Button onClick={HandleClick.bind(this, props.index)}>Delete</Button></span>
                  </Box>
             </li>
             
        </div>

        </form>
        
    
    
          )
     
    }

   

export default Todoitem;