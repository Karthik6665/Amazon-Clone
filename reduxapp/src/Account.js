import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

const Account = () => {
  const { Balance, Fullname, MobileNumber } = useSelector(state => state); 
  return (
    <div>
      <h2>Account Details</h2>
      <table className="account-table">
        <thead>
          <tr>
            <th>Balance</th>
            <th>UserName</th>
            <th>MobileNumber</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Balance}</td>
            <td>{Fullname}</td>
            <td>{MobileNumber}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Account;
