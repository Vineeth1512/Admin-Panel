import React from 'react'
import "./Login.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
function Login(props) {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
   
    const navigate = useNavigate();

    useEffect(() => {
        var localStateValue = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (localStateValue == null) {
            localStorage.setItem("isLoggedIn", false);
           props.setIsLoggedIn(false);
        }
        else {
           props.setIsLoggedIn(localStateValue);
        }
       
    },[props.isLoggedIn]);



    const loginValidation = (event) => {
        event.preventDefault();
        if (username === password) {
            alert("Login Successfull..");
            localStorage.setItem("isLoggedIn", true);
            props.setIsLoggedIn(true);
            navigate("/dashboard");
          
        } else {
            alert("Please enter valid credentials!");
        }

    }
    if (props.isLoggedIn) {
        return <Dashboard
            isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
    }


    return (
        <>
           <Header isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
            <div className='login-wrapper'>
                <div className='login-container'>
                    <div>
                        <form onSubmit={loginValidation}>
                            <h2 className="text-center">Welcome to Dashboard, Login</h2>
                            <label>Username</label>
                            <input type="text" required
                                onChange={(e) => { setUserName(e.target.value) }} />
                            <label>Password</label>
                            <input type="password" required
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <button type="submit" className="login-btn">Login</button>
                            <br></br>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    )
}

export default Login