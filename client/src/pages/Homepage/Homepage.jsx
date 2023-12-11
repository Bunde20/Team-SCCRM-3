import React, { useState, useEffect } from "react";
import "./Homepage.css";
import "animate.css"
import HomepageButton from "../../components/HomepageButton.jsx";
import { Link } from "react-router-dom";
import LogModal from "../../components/Modal.jsx";
import AlertModal from "../../components/AlertModal.jsx";
import LogOutBtn from "../../components/LogOutBtn.jsx";
import AlertModal2 from "../../components/AlertModal2.jsx";
import cardAPI from "../../utils/cardAPI.js";
import userAPI from "../../utils/userAPI.js";

const btnLoggedOutTxt = [
  {
    id: 2,
    text: "How to Play",
    path: "/tutorial",
  },
];

const btnLoggedInTxt = [
  {
    id: 1,
    text: "Play",
    path: "/lobby",
  },
  {
    id: 2,
    text: "How to Play",
    path: "/tutorial",
  },
  {
    id: 3,
    text: "Marketplace",
    path: "/marketplace",
  },
];
export default function Homepage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [modalContent, setModalContent] = useState({
    heading: "Uh Oh!",
    message: "Wrong Username or Password. Please try again!",
  });
  
  const handleCloseAlert = () => setShowAlert(false);
  const handleCloseAlert2 = () => setShowAlert2(false); 

  async function generateRandomCards(newUser) {
    try {
      const res = await cardAPI.getAllCards();
      const cardArr = res.data;
      
      // Ensure that there are at least 3 cards available
      if (cardArr.length < 3) {
        console.error('Not enough cards available');
        return;
      }
  
      const cardIdArr = cardArr.map((card) => card._id);
  
      // Generate and add 3 random cards
      for (let i = 0; i < 3; i++) {
        const randomCardId =
          cardIdArr[Math.floor(Math.random() * cardIdArr.length)];
        await userAPI.addUserCard(newUser._id, randomCardId);
      }
      await newUser.save()
  
      console.log('Successfully added 3 random cards');
    } catch (error) {
      console.error('Error generating random cards:', error.message);
    }
  }
  
  const handleLogin = async (username, password) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const user = await res.json();
      const logToken = await user.token
      console.log(logToken);
      
      if (logToken) {
        console.log(user);
        setIsLoggedIn(true);
        console.log(`${user.user.username} login successful`);
        const currentUserId = user.user._id;
        const currentUsername = user.user.username;
        localStorage.setItem("token", user.token);
        localStorage.setItem("currentUser", currentUserId);
        localStorage.setItem("currentUsername", currentUsername);
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("currentUser");
        localStorage.removeItem("currentUsername");
        setShowAlert(true);
      }
    } catch (err) {
      console.error("Error logging in", err);
    }
  };

  const handleSignup = async (username, password, email) => {
    try { 
      const res = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newUser = await res.json(); 
      if(newUser._id) {
        console.log(newUser);
        handleLogin(username, password);
        generateRandomCards(newUser);
      } else {
        setShowAlert2(true);      
      }
    } catch (err) {
      setIsLoggedIn(false);
      setShowAlert2(true);
      console.error("Error signing up", err);
    }
  }
  function homepageBtnRender() {
    if (isLoggedIn) {
      return btnLoggedInTxt.map((obj, index) => (
        <div key= {index}><HomepageButton {...obj} key={obj.id} /></div>
      ));
    } else {
      return btnLoggedOutTxt.map((obj, index) => (
        <div key={index}><HomepageButton {...obj} key={obj.id} /></div>
      ));
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUsername");
    setIsLoggedIn(false);
  };
  function logoutBtnRender() {
    if (isLoggedIn) {
    return <div><LogOutBtn onLogout={handleLogout} key='4' /></div>; 
  }
    
  }
  function loginBtnRender() {
    if (!isLoggedIn) {
      return <div><LogModal onLogin={handleLogin} onSignup={handleSignup} key='0' /></div>;
    } 
  }
  const currentUser = localStorage.getItem("currentUsername");
  function checkToken() {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }
  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <div className="col-12 homepage-bg">
        <div className="col-11 mx-auto">
          <div id="welcomeEl">
            <p className="text-end p-2 paragraph-text text-white fs-3">{ currentUser ? `Welcome back, ${currentUser}!` : null }</p>
          </div>
          <div className="col-12 row align-items-center mx-auto py-4">
            <div className="col-12 col-lg-6 text-center">
              <p className="homeTitle animate__animated animate__zoomIn">Prográmon Palace</p>
              <div>
                <p className="fs-3 home-subhead animate__animated animate__lightSpeedInLeft animate__delay-1s">Gotta fetch 'em all!</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mx-auto my-1 rounded text-center">
              {homepageBtnRender()}
              {loginBtnRender()}
              {logoutBtnRender()}
            </div>
          </div>
        </div>
      </div>
      <AlertModal
        heading={modalContent.heading}
        message={modalContent.message}
        updateContent={setModalContent}
        show={showAlert}
        handleClose={handleCloseAlert}
      />
      <AlertModal2
        heading="Uh oh!"
        message="Something Went Wrong. Please Try Again!"
        show={showAlert2}
        handleClose={handleCloseAlert2}
        />
    </>
  );
}
