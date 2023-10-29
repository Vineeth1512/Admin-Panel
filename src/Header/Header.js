import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
function Header(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    var localStateValue = JSON.parse(localStorage.getItem("isLoggedIn"));

    const renderButton = () => {
       
        if (props.isLoggedIn === false) {
            return " ";
        } else {
            return <button className='logout-btn' onClick={() => {
                localStorage.setItem("isLoggedIn", false);
                setIsLoggedIn(false)
                navigate('/');
            }}>Logout</button>
        }
    }
    return (
        <>
            <header className='header-wrapper'>
                <h1><Link to="/"> PRODUCT ADMIN</Link></h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/dashboard">
                                <i className="fas fa-tachometer-alt"></i><br></br>
                                <span>Dashboard</span>
                            </Link>

                        </li>
                        <li>
                            <Link to="/products">
                                <i className="fas fa-shopping-cart"></i><br></br>
                                <span>Products</span>
                            </Link>

                        </li>
                        <li>
                            <Link to="/account">
                                <i className="far fa-user"></i><br></br>
                                <span>Account</span>
                            </Link>

                        </li>
                    </ul>
                </nav>
                <div>
                    {renderButton()}
                </div>
            </header>
        </>
    )
}

export default Header