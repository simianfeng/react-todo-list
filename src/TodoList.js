import React,{useState, Fragment} from 'react';
import { Textfield } from 'react-mdl';
import Todoitem from './Todoitem';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/TextField';
import './TodoList.css';

const TodoList=()=>{
  const [Text, SetText]=useState('');
  const [List, SetList]=useState([]);
 

  const textHandler=(event)=>{
  SetText(event.target.value);
  }

  const HandleButtonClick=(event)=>{
    event.preventDefault();
     SetList(List.concat(Text));
     SetText('');
  }

  const HandleItemDelete=(index)=>{
    const NewList=[...List];
    NewList.splice(index,1);
    SetList(NewList);
  }

  return (
    <Fragment>
    <div>
      <div style={{textAlign:'center', paddingLeft:'25%', paddingRight:'25%'}}>
      <h1>My to-do List</h1>
      <form onSubmit={HandleButtonClick} style={{marginTop:'100px'}}>
        <label>What are you going to do?</label>
        <div className='text' style={{marginTop:'30px', marginLeft:'50px'}}>
        <Input size='small' type="text" id="outlined-basic" 
        variant="outlined" value={Text} onChange={textHandler}
        style={{width:'500px'}} autoComplete="Off" required='True'/>
          <Button variant="contained" onClick={HandleButtonClick}>Submit</Button>
        </div>
        </form>
        </div>
          <div style={{marginTop:'30px'}}>
          {List.map((item, index)=>{
            return (
            <ul className="Todoitem" style={{paddingLeft:'450px'}}>
               <Todoitem content={item} index={index} ItemDelete={HandleItemDelete}/>
            </ul>
            )})}
          </div>
      </div>
    </Fragment>
  )
}

export default TodoList;
