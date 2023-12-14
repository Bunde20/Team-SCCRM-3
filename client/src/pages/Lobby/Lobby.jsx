import React, { useEffect, useState } from 'react'

import BeginButton from '../../components/Buttons/BeginButton'
import BackButton from '../../components/Buttons/BackButton'
import Paragraph from '../../components/Paragraph'
import Card from '../../components/Card/'
import userAPI from '../../utils/userAPI'

import './Lobby.css'

export default function Lobby() {
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

    }, [])

    function selectClickHandler(e) {
        const cardExists = cardsChosen.filter((obj) => obj._id === e.target.id).length > 0
        if (beginToggle) {
            return
        } else {
            if (cardsChosen.length > 0) {
                if (cardExists) {
                    const filteredCards = cardsChosen.filter((obj) => obj._id !== e.target.id)
                    setCardsChosen(filteredCards)
                } else {
                    setCardsChosen([...cardsChosen, { _id: e.target.id }])
                }
            } else {
                setCardsChosen([{ _id: e.target.id }])
            }
            e.target.classList.toggle('cardBtn-active')
        }
    }

    function confirmHandler() {
        const warningEl = document.getElementById('warningDiv')
        const confirmEl = document.getElementById('beginBtns')
        if (cardsChosen.length < 3) {
            warningEl.textContent = `You need at least 3 cards.`
            setBeginToggle(false)
        } else if (cardsChosen.length === 3) {
            setBeginToggle(true)
            confirmEl.innerHTML = ''
            userAPI.updateUserTeam(localStorage.getItem('currentUser'), cardsChosen)
        } else {
            warningEl.textContent = `You can only have 3 cards.`
            setBeginToggle(false)
        }
    }

    return (
        <>
            <div className='lobby-bg'>
                <div className='col-12 text-center'>
                    <BackButton text='Back to Home' />
                </div>
                <h1 className='homeTitle text-center col-12'>Prepare for the Palace</h1>
                <main className='col-12 mx-auto'>
                    <div>
                        <Paragraph text='Pick your team, adventurer! Remember, you must choose 3 Prográmon to take with you. Choose wisely and good luck in there!'/>
                    </div>
                    <div>
                        <div className='text-center col-10 mx-auto' id='beginBtns'>
                            <button className='home-btn-cstm rounded' onClick={confirmHandler}>Confirm Team</button>
                            <p className='col-5 mx-auto warning-cstm text-white fs-3 rounded mt-4' id='warningDiv'></p>
                        </div>
                        <div className='text-center col-10 mx-auto'>
                            {beginToggle === true ? <BeginButton /> : null}
                        </div>
                        <h3 className='text-center text-white fs-1 col-md-11 col-10 mx-auto my-4 paragraph-text border-bottom border-white border-4'>Select 3 Prográmon</h3>
                        <div className='d-flex flex-wrap justify-content-center pb-4 col-11 mx-auto' id='cardContainer'>
                            {cards.map((obj, index) =>
                                <div className='' key={index}>
                                    <button className={`cardBtn rounded m-1`} onClick={selectClickHandler} id={obj._id}>
                                        <Card creature={obj} key={obj._id} />
                                    </button>
                                </div>)}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}