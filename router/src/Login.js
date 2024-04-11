import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = data;
    const navigate = useNavigate();

    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submithandler = e => {
        e.preventDefault();
        console.log(data);
        navigate('/Login'); 
    };

    return (
        <div>
            <center>
                <h1>LoginForm</h1>
                <form onSubmit={submithandler}>
                    <input type='email' value={email} placeholder='EmailId' name="email" onChange={changehandler} /><br />
                    <input type='password' value={password} placeholder='password' name="password" onChange={changehandler} /><br />
                    <button type="submit">Login</button>
                </form>
            </center>
        </div>
    )
}

export default Login;
