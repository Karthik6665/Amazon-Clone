import React, { useState } from 'react';
import { edittodo,deletetodo } from './actions';
import {useDispatch} from 'react-redux';



const Todo = ({id,title}) => {

    const[editing,setEditing]=useState(false);
    const[newTitle,setNewTitle]=useState(title);
    const dispatch=useDispatch();
    const handletodo=()=>{
        if(newTitle.trim()){
            dispatch(edittodo({id:id,title:newTitle}))
            setEditing(false)
        }
    }

    const handledelete=()=>{
        dispatch(deletetodo(id))
    }
  return (
    <div>
        {
            editing?(

                <div>
                    <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/>
                    <button type="button" onClick={handletodo} style={{backgroundColor:"blue",color:"white",border:"none",marginLeft:"20px"}}>Save</button>
                </div>
            )
            :(
                <li>
                    <p>
                        {title}
                        <div>
                            <button onClick={()=>setEditing(true)} style={{backgroundColor:"#fcc614",color:"white",border:"none"}}>Edit</button>
                            <button onClick={handledelete} style={{backgroundColor:"red",color:"white",border:"none"}}>Delete</button>
                        </div>
                    </p>
                </li>
            )
        }
      
    </div>
  )
}

export default Todo
