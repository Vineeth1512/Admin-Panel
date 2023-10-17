
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import Login from './LoginPage/Login';
import Dashboard from './Dashboard/Dashboard';
function App() {
  var [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    var localStateValue = JSON.parse(localStorage.getItem("isLoggedIn"));
    if (localStateValue == null) {
      localStorage.setItem("isLoggedIn", false);
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(localStateValue);
    }
  })

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='/dashboard' element={isLoggedIn === true ? <Dashboard /> : <Navigate to={"/"} />}></Route>
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
