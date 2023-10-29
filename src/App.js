
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './LoginPage/Login';
import Dashboard from './Dashboard/Dashboard';
import Product from './Products/Product';
import Account from './Account/Account';
import axios from 'axios';
function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  let [dashboard, setDashboard] = useState([]);


  useEffect(() => {
    axios.get("https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json").then((response) => {
      console.log(response.data.accountsPage);
      setDashboard(response.data.dasbhoardPage);
      localStorage.setItem("apiData", JSON.stringify(response.data));
      localStorage.setItem("productPage", JSON.stringify(response.data.productsPage))
      localStorage.setItem("dashboardPage", JSON.stringify(response.data.dasbhoardPage))
      localStorage.setItem("accountsPage", JSON.stringify(response.data.accountsPage))


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
  }, [])

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to={'/'} />} />
            <Route path="/products" element={isLoggedIn ? <Product /> : <Navigate to={'/'} />} />
            <Route path="/account" element={isLoggedIn ? <Account /> : <Navigate to={'/'} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
