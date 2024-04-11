import axios from 'axios';
import React, { useState } from 'react';


const ContactUs = () => {
    const [data, setData] = useState({
        emailid: "",
        name: "",
        Mobile_number: "",
        query: ""
    });

    const { emailid, name, Mobile_number, query } = data;

    const changehandler = e => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://emart-b03e2-default-rtdb.firebaseio.com/contactUs.json',data)
        .then(()=>alert("your query submitted successfully we will get you as soon as possible."))
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <div style={{ textAlign: 'center', padding: '20px', borderRadius: '10px', backgroundColor: '#eeeeee' }}>
                <h4 style={{ marginBottom: '20px' }}>CONTACT US FOR ANY QUERIES </h4>
                <form onSubmit={submitHandler}>
                    <input type='email' name="emailid" value={emailid} placeholder="EmailID" onChange={changehandler} /><br />
                    <input type='text' name='name' value={name} placeholder="Fullname" onChange={changehandler} /><br />
                    <input type='tel' name='Mobile_number' value={Mobile_number} placeholder="Mobile_number" onChange={changehandler} /><br />
                    <input type='text' name='query' value={query} placeholder="Elebrate your Query" onChange={changehandler} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
