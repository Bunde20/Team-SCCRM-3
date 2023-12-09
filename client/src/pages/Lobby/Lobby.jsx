import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

import BackButton from '../../components/BackButton/BackButton'
import CardSelectButton from '../../components/CardSelectButton/CardSelectButton'
import Paragraph from '../../components/Paragraph'
import Card from '../../components/Card'
import userAPI from '../../utils/userAPI'
import './Lobby.css'


export default function Lobby() {
    const pageLoad = ''

    const [cards, setCards] = useState([])
    const [cardsChosen, setCardsChosen] = useState([])

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
        console.log(e.target.id)
        if (cardsChosen.length > 0) { setCardsChosen([...cardsChosen, { _id: e.target.id }]) }
        else { setCardsChosen([{ _id: e.target.id }]) }
    }

    function beginHandler () {
        console.log(cardsChosen)
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
                <div className='text-center'>
                    <button onClick={beginHandler}>test</button>
                </div>
                <main className='col-10 mx-auto'>
                    <div>
                        {lobbyParagraphRender()}
                    </div>
                    <div>
                        <h2 className='text-center text-white fs-1 col-12 my-5 paragraph-text'>Select your 3 Prográmon</h2>
                        <div className='col-12 text-center border border-white row' id='cardContainer'>
                            {cards.map((obj, index) =>
                                <div className='col-xl-3 col-lg-4 col-6' key={index}>
                                    <Card creature={obj} key={obj._id} />
                                    <CardSelectButton text='Select' clickHandler={selectClickHandler} id={`${obj._id}`} />
                                </div>)}
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link to='/game'>
                            <button className='continue-btn-cstm rounded'>Begin</button>
                        </Link>
                    </div>
                </main>
            </div>
        </>
    )
}