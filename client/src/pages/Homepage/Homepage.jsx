import './Homepage.css'
import Button from '../../components/HomepageButton.jsx'
import { Link } from 'react-router-dom'

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

    const isLoggedIn = true

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
                    <button className='col-10 btn btn-secondary my-5'> Login </button>
                </div>
            </div>

        </>
    )
}