import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const SignUp = () =>{
    const [data, setData] = useState({
        fullname:"",
        email: "",
        password: "",
        confirmpassword:""
    });
    const { fullname,email, password,confirmpassword } = data;
    const navigate = useNavigate();

    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submithandler = e => {
        e.preventDefault();
        console.log(data);
        navigate('/SignUp'); 
    };

    return (
        <div style={{diplay:"grid",padding:"20px"}}>
            <center>
                <h1>SIGN-UP FORM</h1>
                <form onSubmit={submithandler}>
                <input type='text' value={fullname} placeholder='Fullname' name="fullname" onChange={changehandler} /><br />
                    <input type='email' value={email} placeholder='EmailId' name="email" onChange={changehandler} /><br />
                    <input type='password' value={password} placeholder='password' name="password" onChange={changehandler} /><br />
                    <input type='password' value={confirmpassword} placeholder='Confirmpassword' name="confirmpassword" onChange={changehandler} /><br />
                    <button type="submit">SignUp</button>
                </form>
            </center>
        </div>
    )
}

export default SignUp
