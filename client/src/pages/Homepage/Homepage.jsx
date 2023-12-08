import React, { useState, useEffect } from "react";
import "./Homepage.css";
import HomepageButton from "../../components/HomepageButton.jsx";
import { Link } from "react-router-dom";
import LogModal from "../../components/Modal.jsx";
import AlertModal from "../../components/AlertModal.jsx";
import LogOutBtn from "../../components/LogOutBtn.jsx";
import AlertModal2 from "../../components/AlertModal2.jsx";


const btnLoggedOutTxt = [
  {
    id: 0,
    text: "How to Play",
    path: "/tutorial",
  },
];

const btnLoggedInTxt = [
  {
    id: 0,
    text: "Play",
    path: "/lobby",
  },
  {
    id: 1,
    text: "How to Play",
    path: "/tutorial",
  },
  {
    id: 2,
    text: "Marketplace",
    path: "/marketplace",
  },
];
export default function Homepage() {
  // const isLoggedIn = true
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [modalContent, setModalContent] = useState({
    heading: "Uh Oh!",
    message: "Wrong Username or Password. Please try again!",
  });
  

  const handleCloseAlert = () => setShowAlert(false);
  const handleCloseAlert2 = () => setShowAlert2(false); 

  const handleLogin = async (username, password) => {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
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
      const res = await fetch("http://localhost:3000/api/users", {
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
      return btnLoggedInTxt.map((obj) => (
        <HomepageButton {...obj} key={obj.id} />
      ));
    } else {
      return btnLoggedOutTxt.map((obj) => (
        <>
          <HomepageButton {...obj} key={obj.id} />
        </>
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
    return <LogOutBtn onLogout={handleLogout} />; 
  }
    
  }
  function loginBtnRender() {
    if (!isLoggedIn) {
      return <LogModal onLogin={handleLogin} onSignup={handleSignup} />;
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
            <p className="text-end">Welcome {currentUser}!</p>
          </div>
          <div className="col-12 row align-items-center mx-auto">
            <div className="col-12 col-lg-6 text-center">
              <p className="homeTitle">Prográmon Palace</p>
              <div>
                <p className="fs-3 home-subhead">Gotta fetch 'em all!</p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mx-auto my-5 rounded text-center">
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
