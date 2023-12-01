import React, { useState } from 'react'
import './Homepage.css'
import Button from '../../components/HomepageButton.jsx'
import { Link } from 'react-router-dom'
import LoginModal from '../../components/LoginModal.jsx'

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
    const [showLoginModal, setShowLoginModal] = useState(false)

    const handleLogin = async (username,password) => {
        try{
            const res = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.success) {
                setIsLoggedIn(true)
                setShowLoginModal(false)
            } else {
                alert('Invalid username or password')
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

    return (
        <>
            <div id='welcomeEl'>
                <p className='m-5 text-end'>Welcome!</p>
            </div>
            <div className="col-10 col-md-4 mx-auto my-5 rounded homepageContainer">
                <div className="col-10 text-end ms-5 bg-primary">
                    {homepageBtnRender()}
                    <button className='col-10 btn btn-secondary my-5' onClick={() => {console.log('login button was clicked'),setShowLoginModal(true)}}> Login </button>
                </div>
            </div>
        {showLoginModal &&(
            <LoginModal onClose={() => setShowLoginModal(false)} onLogin={handleLogin} />
        )}
        </>
    )
}