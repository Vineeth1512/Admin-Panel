
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './LoginPage/Login';
import Dashboard from './Dashboard/Dashboard';
import Product from './Products/Product';
import Acount from './Acount/Acount';
import axios from 'axios';
function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  let [dashboard, setDashboard] = useState([]);
 // let [apiData ,setApiData] = useState([])

  useEffect(() => {
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json").then((response) => {
     console.log(response.data);
      //setDashboard(response.data.dasbhoardPage);
      localStorage.setItem("apiData",JSON.stringify(response.data));
    }).catch((err) => {
      console.log(err);
    })


    var localStateValue = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (localStateValue == null) {
      localStorage.setItem("isLoggedIn", false);
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(localStateValue);
    }
  },[])

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/products' element={isLoggedIn === true ? <Product /> : <Navigate to={"/"} />}></Route>
            <Route path='/acount' element={isLoggedIn === true ? <Acount /> : <Navigate to={"/"} />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
