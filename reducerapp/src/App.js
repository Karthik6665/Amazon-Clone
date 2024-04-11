import React, { useReducer } from 'react'

const counterreduce=(state,input)=>{
  console.log(state,input)
  return state+input

}

const App = () => {
  const [counter,dispatch]=useReducer(counterreduce,0)
  return (
    <div>
      <button onClick={()=>{
        dispatch(-1)
      }}>-</button>
      <div>Counter:{counter}</div>
      <button onClick={()=>{
        dispatch(+1)
      }}>+</button>
      
    </div>
  )
}

export default App
