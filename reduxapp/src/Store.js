import { createStore } from 'redux';

const Customer = {
  Balance: 0,
  Fullname: "",
  MobileNumber: null
};

function reducer(state = Customer, action) {
    switch(action.type){
        case "deposit":
            return { ...state, Balance: state.Balance + +action.payload };
        case "withdrawal":
            return { ...state, Balance: state.Balance - action.payload };
        case "MobileUpdate":
            return {...state, MobileNumber:action.payload};
        case "FullName":
            return  {...state,Fullname:action.payload};
        case "Reset":
            return Customer
        default:
            return state

    }
}

const store = createStore(reducer);

export default store