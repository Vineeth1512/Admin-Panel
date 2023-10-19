import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom'
function Header(props) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const renderButton = () => {
        if (props.isLoggedIn === false) {
          return " ";
        } else {
          return <button className='logout-btn' onClick={() =>{
            localStorage.setItem("isLoggedIn", false);
             setIsLoggedIn(false)
             navigate("/");
              }}>Logout</button>
        }
      }
    return (
        <><header className='header-wrapper'>
            <h1><a href='/'> PRODUCT ADMIN</a></h1>
            <nav>
                <ul>
                    <li className="">
                        <a href="/"><i className="fas fa-tachometer-alt"></i><br></br><span> <Link to={"/dashboard"}>Dashboard</Link></span></a>
                    </li>
                    <li className="">
                        <a href="/"> <i className="fas fa-shopping-cart"></i><br></br><span> <Link to={"/products"}>Products</Link></span></a>
                    </li>
                    <li className="">
                        <a href="/"> <i className="far fa-user"></i><br></br><span> <Link to={"/acount"}>Acount</Link></span> </a>
                    </li>

                    
                </ul>
            </nav>
            <div >
            {renderButton()}
            </div>
           
        </header></>
    )
}

export default Header