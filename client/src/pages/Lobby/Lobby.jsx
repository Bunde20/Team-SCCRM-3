import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import BackButton from '../../components/BackButton/BackButton'
import CardSelectButton from '../../components/CardSelectButton/CardSelectButton'
import Paragraph from '../../components/Paragraph'
import Card from '../../components/Card'
import userAPI from '../../utils/userAPI'
import './Lobby.css'
import BeginButton from '../../components/BeginButton.jsx'


export default function Lobby() {
    const pageLoad = ''

    const [cards, setCards] = useState([])
    const [cardsChosen, setCardsChosen] = useState([])
    const [beginToggle, setBeginToggle] = useState(false)

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await userAPI.getOneUser(localStorage.getItem('currentUser'))
                const userCards = res.data[0].cards
                setCards(userCards)
            } catch (err) {
                console.error("Error fetching User's cards.", err)
            }
        }
        fetchCards();

    }, [pageLoad])

    function selectClickHandler(e) {
        if (cardsChosen.length > 0) { setCardsChosen([...cardsChosen, { _id: e.target.id }]) }
        else { setCardsChosen([{ _id: e.target.id }]) }
    }

    function confirmHandler() {
        const warningEl = document.getElementById('warningDiv')
        const confirmEl = document.getElementById('beginBtns')
        console.log(cardsChosen)
        if (cardsChosen.length < 3) {
            console.log('setting 3 cards.')
            warningEl.textContent = `You need at least 3 cards.`
            setBeginToggle(false)
        } else if (cardsChosen.length === 3) {
            setBeginToggle(true)
            confirmEl.innerHTML = ''
            async function setTeam () {
                try {
                    userAPI.updateUserTeam(localStorage.getItem('currentUser'), cardsChosen)
                } catch (err) {
                    console.error('Error setting team.', err)
                }
            }
            setTeam()
        } else {
            warningEl.textContent = `You can only have 3 cards.`
            setBeginToggle(false)
        }
        
    }

    const lobbyText = [
        {
            id: 0,
            text: "Pick your team, adventurer! Remember, you must choose 3 Prográmon to take with you. Choose wisely and good luck in there!"
        }
    ]

    function lobbyParagraphRender() {
        return lobbyText.map((obj) => <Paragraph {...obj} key={obj.id} />)
    }

    return (
        <>
            <div className='lobby-bg'>
                <div className='col-12 text-center'>
                    <BackButton text='Back to Home' />
                </div>
                <h1 className='homeTitle text-center col-12'>Prepare for the Palace</h1>
                <main className='col-10 mx-auto'>
                    <div>
                        {lobbyParagraphRender()}
                    </div>
                    <div>
                        <h2 className='text-center text-white fs-1 col-12 my-5 paragraph-text border-bottom border-white border-4 rounded-pill'>Your Team</h2>
                        <div className='col-12 text-center row'>
                            <div className='col-xl-3 col-lg-4 col-6' id='cardsChosenContainer'>

                            </div>
                        </div>
                        <div className='text-center col-10 mx-auto' id='beginBtns'>
                            <p className='col-5 mx-auto warning-cstm text-white fs-3 rounded' id='warningDiv'></p>
                            <button className='home-btn-cstm rounded' onClick={confirmHandler}>Confirm</button>                        
                        </div>
                        <div className='text-center col-10 mx-auto'>
                            {beginToggle === true ? <BeginButton /> : null}
                        </div>
                        <h3 className='text-center text-white fs-1 col-12 my-5 paragraph-text border-bottom border-white border-4 rounded-pill'>Select 3 Prográmon</h3>
                        <div className='col-12 text-center row' id='cardContainer'>
                            {cards.map((obj, index) =>
                                <div className='col-xl-3 col-lg-4 col-6' key={index}>
                                    <Card creature={obj} key={obj._id} />
                                    <CardSelectButton text='Select' clickHandler={selectClickHandler} id={`${obj._id}`} />
                                </div>)}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}