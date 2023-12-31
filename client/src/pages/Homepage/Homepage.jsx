import React, { useState, useEffect } from "react";
import "./Homepage.css";
import "animate.css"
import HomepageButton from "../../components/Buttons/HomepageButton/";
import LogModal from "../../components/Modal/index.jsx";
import AlertModal from "../../components/AlertModals/AlertModal/index.jsx";
import LogOutBtn from "../../components/Buttons/LogOutBtn";
import AlertModal2 from "../../components/AlertModals/AlertModal2/index.jsx";
import cardAPI from "../../utils/cardAPI.js";
import userAPI from "../../utils/userAPI.js";
import RepoLogo from "../../components/GitHubLogo/index.jsx";

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
      
      if (logToken) {
        setIsLoggedIn(true);
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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("currentUsername");
    setIsLoggedIn(false);
  };

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
            <header className="col-12 col-lg-6 text-center">
              <h1 className="homeTitle animate__animated animate__zoomIn">Prográmon Palace</h1>
              <div>
                <p className="fs-3 home-subhead animate__animated animate__lightSpeedInLeft animate__delay-1s">Gotta fetch 'em all!</p>
              </div>
            </header>
            <main className="col-12 col-lg-6 mx-auto my-1 rounded text-center">
              {isLoggedIn ? btnLoggedInTxt.map((obj, index) => (<div key= {index}><HomepageButton {...obj} key={obj.id} /></div>)) : btnLoggedOutTxt.map((obj, index) => (<div key={index}><HomepageButton {...obj} key={obj.id} /></div>)) }
              {isLoggedIn ? <div><LogOutBtn onLogout={handleLogout} /></div> : <div><LogModal onLogin={handleLogin} onSignup={handleSignup} /></div> }
              <RepoLogo />
            </main>
          </div>
          
        </div>
      </div>
      <AlertModal
        heading={modalContent.heading}
        message={modalContent.message}
        classHeader='home-alert-hd-bg paragraph-text text-white'
        classBody='fw-bold'
        classFooter='home-alert-ft-bg'
        updateContent={setModalContent}
        show={showAlert}
        handleClose={handleCloseAlert}
      />
      <AlertModal2
        heading="Uh oh!"
        message="Something Went Wrong. Please Try Again!"
        classHeader='home-alert-hd-bg paragraph-text text-white'
        classBody='fw-bold'
        classFooter='home-alert-ft-bg'
        show={showAlert2}
        handleClose={handleCloseAlert2}
        />
    </>
  );
}