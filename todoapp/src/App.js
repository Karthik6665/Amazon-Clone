import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from './actions';
import TodoList from './Todolist';

const App = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");

  const handleTodo = (e) => {
    if (todoTitle.trim()) {
      const newTodo = {
        todo: todoTitle
      }
      dispatch(addtodo(newTodo))
      setTodoTitle("")
    }
  }

  return (
    <div>
      <center>
        <h1 style={{color:"blue"}}>TODO MANAGEMENT WITH REACT & REDUX</h1>
      </center>
      <center>
        <form>
          <div>
            <input  style={{border:"1px solid blue"}}type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
            <button style={{marginLeft:"10px",border:"none",color:"white",backgroundColor:"black"}}type='button' onClick={handleTodo}>AddTask</button>
          </div>
        </form>
      </center>
      <TodoList />
    </div>
  );
}

export default App;
