import React, { useState } from 'react'
import './Homepage.css'
import Button from '../../components/HomepageButton.jsx'
import { Link } from 'react-router-dom'
import LogModal from '../../components/Modal.jsx'
const btnLoggedOutTxt = [
    {
        text: 'How to Play',
        path: '/tutorial'
    },
    {
        text: 'Marketplace',
        path: '/marketplace'
    }
]

const btnLoggedInTxt = [
    {
        text: 'New Game',
        path: '/lobby'
    },
    {
        text: 'Continue',
        path: '/game'
    },
    {
        text: 'How to Play',
        path: '/tutorial'
    },
    {
        text: 'Marketplace',
        path: '/marketplace'
    },
]

export default function Homepage() {

    // const isLoggedIn = true
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleLogin = async (username,password) => {
        try{
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.token) {
                console.log('Login successful')
                setIsLoggedIn(true)
                
            } 
        
        } catch (err) {
        console.error('Error logging in', err)
    }
}

    function homepageBtnRender() {
        if (isLoggedIn) {
            return btnLoggedInTxt.map(obj => <Button {...obj} />)
        } else {
            return btnLoggedOutTxt.map(obj => <Button {...obj} />)
        }
    }
    function loginBtnRender() {
        if(!isLoggedIn) {
            return <LogModal onLogin={handleLogin}/>
        }
    }


    return (
        <>
        {/* {showLoginModal &&(
            <LogModal onClose={() => setShowLoginModal(false)}  />
        )} */}
            <div id='welcomeEl'>
                <p className='m-5 text-end'>Welcome!</p>
            </div>
            <div className="col-10 col-md-4 mx-auto my-5 rounded homepageContainer">
                <div className="col-10 text-end ms-5 bg-primary">
                    {homepageBtnRender()}
                    {loginBtnRender()}
                    {/* <button className='col-10 btn btn-secondary my-5' onClick={() => {console.log('login button was clicked'),handleShow(true)}}> Login </button> */}
                </div>
            </div>
        </>
    )
}