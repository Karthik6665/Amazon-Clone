import {createSlice} from '@reduxjs/toolkit';

let initialState={
    users:[],
    status:"",
    error:false,

}

// dispatchEvent(fetchUsers())

export let fetchUsers=createAsyncThunk('user/fetch',async ()=>{
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data=await response.json();
        return data
    }
    catch(error){
        throw error
    }
});//we can take anything here.
createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        fetchUsersData:(state,action)=>{},
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.status='Loading'
        })
        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.status='Completed',
            state.users=action.payload
        })
        .addCase(fetchUsers.rejected,(state,action)=>{
            state.status='error',
            state.users=[],
            state.error=action.error.message
        })
    },
})

