import React from 'react'
import './Header.css'
function Header(props) {
    return (
        <><header className='header-wrapper'>
            <h1><a href='/'> PRODUCT ADMIN</a></h1>
            <nav>
                <ul>
                    <li class="">
                        <a href="/"><i class="fas fa-tachometer-alt"></i><br></br><span>Dashboard</span></a>
                    </li>
                    <li class="">
                        <a href="/"> <i class="fas fa-shopping-cart"></i><br></br><span>Products</span></a>
                    </li>
                    <li class="">
                        <a href="/"> <i class="far fa-user"></i><br></br><span>Account</span> </a>
                    </li>


                    {props.isLoggedIn && (
                        <li className="">
                            <button type="button" onClick={props.logout}><i className="fas fa-sign-out-alt"></i><br /><span>Logout</span></button>
                        </li>
                    )}
                </ul>
            </nav>
        </header></>
    )
}

export default Header