import './Homepage.css'
import Button from '../../components/Button.jsx'

const btnLoggedInTxt = [
    {
        text: 'Login'
    },
    {
        text: 'How to Play'
    },
    {
        text: 'Marketplace'
    }
]

const btnLoggedOutTxt = [
    {
        text: 'New Game'
    },
    {
        text: 'Continue'
    },
    {
        text: 'How to Play'
    },
    {
        text: 'Marketplace'
    },
    {
        text: 'Logout'
    },
]

export default function Homepage() {

    const isLoggedIn = false
     
    function homepageBtnRender () {
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
                {homepageBtnRender()}
            </div>

        </>
    )
}