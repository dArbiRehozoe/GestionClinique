import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/login';
import WelcomeAdmin from './components/welcomeAdmin';
import WelcomeUser from './components/welcomeUser';
import Category from './components/category';
import SousCategory from './components/sc';
import Account from './components/account';
import Team from './components/team';

const App = () => {
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem('accessToken'));
  const [userData, setUserData] = useState([]);
  const [Categorydata, setCategoryData] = useState([]);
  const [SCategorydata, setSCategoryData] = useState([]);
  const [Teamdata , setTeamData] = useState([]);

  const fetchUserDetails = (token) => {
    fetch('http://localhost:8000/accounts/login/user-details/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('User details:', data);
        setUserData(data);
     
      })
      .catch((error) => {
        console.error('Error fetching user details:', error);
      });
  };

  const fetchCategoryData = (token) => {
    fetch('http://localhost:8000/category/category/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('category details:', data);
        setCategoryData(data);
      })
      .catch((error) => {
        console.error('Error fetching category details:', error);
      });
  };

  const fetchSCategoryData = (token) => {
    fetch('http://localhost:8000/sc/Souscategory/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('sc details:', data);
        setSCategoryData(data);
      })
      .catch((error) => {
        console.error('Error fetching sc details:', error);
      });
  };

  const fetchTeamData = (token) => {
    fetch('http://localhost:8000/team/team/', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then((data) => {
        console.log('team details:', data);
        setTeamData(data);
      })
      .catch((error) => {
        console.error('Error fetching team details:', error);
      });
  };

  const handleLogin = (token) => {
    console.log('Received token:', token);
    sessionStorage.setItem('accessToken', token);
    setAccessToken(token);
    fetchUserDetails(token);
    fetchCategoryData(token);
    fetchSCategoryData(token);
    fetchTeamData(token);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('accessToken');
    setAccessToken(null);
    setUserData([]);
  };

  useEffect(() => {
    const storedToken = sessionStorage.getItem('accessToken');
    if (storedToken) {
      setAccessToken(storedToken);
      fetchUserDetails(storedToken);
      fetchCategoryData(storedToken);
      fetchSCategoryData(storedToken);
      fetchTeamData(storedToken);
    }
  }, []);

  return (

    <Router>
      <Routes>
        <Route
          path="/welcome"
          element={
            accessToken ? (
              userData && userData.role && userData.role.roleID === 1 ? (
            
                  <WelcomeAdmin username={userData.username} handleLogout={handleLogout} />

              ) : (
                  <WelcomeUser username={userData.username} handleLogout={handleLogout} />
              )
            ) : (
              <Navigate replace to="/" />
            )
          }
        />

        <Route path="/welcome/accounts" element={accessToken && userData && userData.role && userData.role.roleID === 1 ? (<Account />) : (<Navigate replace to="/"/>)} />

        <Route path="/welcome/category" element={accessToken && userData && userData.role && userData.role.roleID === 1 ? (<Category Category={Categorydata} fetchCategoryData={fetchCategoryData} accessToken={accessToken} />) : (<Navigate replace to="/"/>)} />

        <Route path="/welcome/sous-category" element={accessToken && userData && userData.role && userData.role.roleID === 1 ? (<SousCategory SCategory={SCategorydata} fetchSCategoryData={fetchSCategoryData} accessToken={accessToken} />) : (<Navigate replace to="/"/>)} />

        <Route path="/welcome/team" element={accessToken && userData && userData.role && userData.role.roleID === 1 ? (<Team Team={Teamdata} fetchTeamData={fetchTeamData} accessToken={accessToken} />) : (<Navigate replace to="/"/>)} />

        <Route
          path="/"
          element={
            accessToken ? (
              <Navigate replace to="/welcome" />
            ) : (
              <Login handleLogin={handleLogin} />
            )
          }
        />

      </Routes>
    </Router>

  );
};

export default App;
