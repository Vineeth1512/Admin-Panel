import React from 'react'
import "./Login.css"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'
function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, SetIsLoggedIn] = useState(false);
    const navigate = useNavigate();


    const loginValidation = (event) => {
        if (username === password) {
            alert("Login Successfull..");
            localStorage.setItem("isLoggedIn", true);
            SetIsLoggedIn(true);
            navigate("/dashboard");
        } else {
            alert("Please enter valid credentials!");
        }

    }
    if (isLoggedIn) {
        return <Dashboard
            isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
    }



    return (
        <>
            <Header isLoggedIn={isLoggedIn} SetIsLoggedIn={SetIsLoggedIn} />
            <div className='login-wrapper'>
                <div className='login-container'>
                    <div>
                        <form onSubmit={loginValidation}>
                            <h2 class="text-center">Welcome to Dashboard, Login</h2>
                            <label>Username</label>
                            <input type="text" required
                                onChange={(e) => { setUserName(e.target.value) }} />
                            <label>Password</label>
                            <input type="password" required
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <button type="submit" class="btn">Login</button>
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