import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import "./Account.css";

function Account() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const [selectedAccount, setSelectedAccount] = useState("select account");
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
    reenterPassword: "",
    profilePic: "", // Store the base64-encoded image data
  });
  const accountData = JSON.parse(localStorage.getItem("accountsPage"));
  const [isDataUpdated, setIsDataUpdated] = useState(false);

  useEffect(() => {
    // Retrieve data from the accountData object based on the selected account
    const userDataForSelectedAccount = accountData[selectedAccount];
    if (userDataForSelectedAccount) {
      setUserData(userDataForSelectedAccount);
    }
  }, [selectedAccount]);

  const handleAccountChange = (event) => {
    const selectedAccount = event.target.value;
    setSelectedAccount(selectedAccount);
    console.log("Selected Account:", selectedAccount);

    // Retrieve data from local storage based on the selected account
    const accountData = JSON.parse(localStorage.getItem(selectedAccount));
    console.log("Retrieved Data:", accountData);

    if (accountData) {
      setUserData(accountData);
      console.log("Set User Data:", accountData);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setIsDataUpdated(true);
  };

  const handleUpdateProfile = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    console.log(isDataUpdated)
    if (!isDataUpdated) {
      alert("You have not updated anything.");
      return;
    }

    // Store the data in local storage based on the selected account
    accountData[selectedAccount] = userData;
    localStorage.setItem("accountsPage", JSON.stringify(accountData));
    setIsDataUpdated(false);
    alert("Information Updated Successfully!");
  };

  const handleProfilePicUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData({
          ...userData,
          profilePic: e.target.result, // Store the base64-encoded image data
        });
      };
      reader.readAsDataURL(file);
    }
  };




  return (
    <>
      <Header />
      <div className='account-content-wrapper'>
        <div>
          <div className='list-of-account'>
            <h2>List of Accounts</h2>
            <label>Accounts</label>
            <br></br>
            <select value={selectedAccount} onChange={handleAccountChange}>
              <option value="select account">Select Account</option>
              {Object.keys(accountData).map((accountType) => (
                <option key={accountType} value={accountType}>
                  {accountType}
                </option>
              ))}
            </select>
          </div>
          <br></br>
          <br></br>
          <div className='form-wrapper'>
            <div className='image-content-wrapper'>
              <div className='image-container'>
                {userData.profilePic && (
                  <img src={userData.profilePic} alt="User Profile" />
                )} <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicUpload}
                />
              </div>
            </div>
            <div className='image-content-wrapper'>
              <div>
                <h2>Account Settings</h2>
                <form>
                  <div className="input-container">
                    <div className="input-fields">
                      <label>Account Name</label>
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleInputChange}
                      // Make the input fields read-only
                      />
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleInputChange}

                      />
                      <label>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleInputChange}

                      />
                    </div>
                    <div className="input-fields">
                      <label>Account Email</label>
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleInputChange}

                      />
                      <label>Re-enter Password</label>
                      <input
                        type="password"
                        name="reenterPassword"
                        value={userData.reenterPassword}
                        onChange={handleInputChange}

                      />
                      <div className="account-data-btn">
                        <button
                          className="btn"
                          onClick={handleUpdateProfile}
                        >
                          Update Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
