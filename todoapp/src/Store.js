import {createStore} from 'redux';

const initialstate={
    todos:[],
    nextId:1
}

const todoreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "ADD_TODO":
            const newTodo = { id: state.nextId, title: action.payload.todo }; 
            return {
                ...state, todos: [...state.todos, newTodo], nextId: state.nextId + 1
    };

        case "EDIT_TODO":
            return {
                ...state,todos:state.todos.map((todo)=>todo.id===action.payload.id?{...todo,title:action.payload.title}:todo)
            }
        case "DELETE_TODO":
            return {
                ...state,todos:state.todos.filter((todo)=>todo.id!==action.payload.id),
            }
        default:
            return state
    }
}

const store=createStore(todoreducer)
export default store;