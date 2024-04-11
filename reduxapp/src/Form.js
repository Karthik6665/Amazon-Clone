import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {deposit} from './actions';
import {withdrawal} from './actions';
import { Cellnumber } from './actions';
import { Name,resetValue } from './actions';

const Form = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        amount: "",
        Mobile: "",
        Fullname: ""
    });

    const { amount, Mobile, Fullname } = data;

    const handleAmountChange = (e) => {
        setData({ ...data, amount: e.target.value });
    };

    const handleMobileChange = (e) => {
        setData({ ...data, Mobile: e.target.value });
    };

    const handleNameChange = (e) => {
        setData({ ...data, Fullname: e.target.value });
    };

    const handleDeposit = () => {
        dispatch(deposit(amount));
        setData({...data,amount:""})
    };

    const handleWithdrawal = () => {
        dispatch(withdrawal(amount));
        setData({...data,amount:""})
    };

    const handleMobileUpdate = () => {
        dispatch(Cellnumber(Mobile));
        setData({...data,Mobile:""})
    };

    const handleNameUpdate = () => {
        dispatch((Name(Fullname)));
        setData({...data,Fullname:""})
    };

    const handlereset=()=>{
        dispatch((resetValue()))
        setData({amount:"",Fullname:"",Mobile:""})
    }    

    return (
        <div>
            <h2>FORM </h2>
            <div>
                <form>
                    <input type="number" name="amount" placeholder='Amount' value={amount || ''} onChange={handleAmountChange} />
                    <button type="button" onClick={handleDeposit}>Deposit</button>
                    <button type="button" onClick={handleWithdrawal}>Withdrawal</button><br />
                    <input type="tel" name="Mobile" placeholder='MobileNumber' value={Mobile || ''} onChange={handleMobileChange} />
                    <button type="button" onClick={handleMobileUpdate}>Update Mobile</button><br />
                    <input type="text" name="Fullname" placeholder='Fullname' value={Fullname || ''} onChange={handleNameChange} />
                    <button type="button" onClick={handleNameUpdate}>Update Fullname</button><br />
                    <button type="button" onClick={handlereset}>Reset</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
