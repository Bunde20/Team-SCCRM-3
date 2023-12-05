import React, { useState } from 'react'
import './Homepage.css'
import HomepageButton from '../../components/HomepageButton.jsx'
import { Link } from 'react-router-dom'
import LogModal from '../../components/Modal.jsx'


const btnLoggedOutTxt = [
    {
        id: 0,
        text: 'How to Play',
        path: '/tutorial'
    },
    {
        id: 1,
        text: 'Marketplace',
        path: '/marketplace'
    }
]

const btnLoggedInTxt = [
    {
        id: 0,
        text: 'New Game',
        path: '/lobby'
    },
    {
        id: 1,
        text: 'Continue',
        path: '/game'
    },
    {
        id: 2,
        text: 'How to Play',
        path: '/tutorial'
    },
    {
        id: 3,
        text: 'Marketplace',
        path: '/marketplace'
    },
]

export default function Homepage() {

    // const isLoggedIn = true
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const handleLogin = async (username, password) => {
        try {
            const res = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            console.log(data)
            if (data.token) {
                console.log('Login successful')
                setIsLoggedIn(true)
         
            } else {
                alert('Invalid username or password')
            }

        } catch (err) {
            console.error('Error logging in', err)
        }
    }

    function homepageBtnRender() {
        if (isLoggedIn) {
            return btnLoggedInTxt.map(obj => <HomepageButton {...obj} key={obj.id} />)
        } else {
            return btnLoggedOutTxt.map(obj => <HomepageButton {...obj} key={obj.id} />)
        }
    }
    function loginBtnRender() {
        if (!isLoggedIn) {
            return <LogModal onLogin={handleLogin} />
        }
    }


    return (
        <>
            {/* {showLoginModal &&(<LogModal onClose={() => setShowLoginModal(false)}  />)} */}
            <div className='col-12 homepage-bg'>
                <div className='col-11 mx-auto'>
                    <div id='welcomeEl'>
                        <p className='text-end'>Welcome!</p>
                    </div>
                    <div className='col-12 row align-items-center mx-auto'>
                        <div className='col-12 col-lg-6 text-center'>
                            <p className='homeTitle'>Prográmon Palace</p>
                            <div>
                                <p className='fs-3 home-subhead'>Gotta fetch 'em all!</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 mx-auto my-5 rounded text-center">
                            {homepageBtnRender()}
                            {loginBtnRender()}
                            {/* <button className='col-10 btn btn-secondary my-5' onClick={() => {console.log('login button was clicked'),handleShow(true)}}> Login </button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}