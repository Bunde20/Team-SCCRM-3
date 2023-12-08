import { Link } from 'react-router-dom'
import React, {useEffect, useState} from 'react'

import BackButton from '../../components/BackButton/BackButton'
import Paragraph from '../../components/Paragraph'
import Card from '../../components/Card'
import userAPI from '../../utils/userAPI'
import './Lobby.css'


export default function Lobby() {
    const [cards, setCards] = useState([])

    const lobbyText = [
        {
            id: 0,
            text: "Here you can prepare for your adventure! Remember, you must choose 3 Prográmon to take with you. Choose wisely and good luck in there, adventurer!"
        }
    ]

    function lobbyParagraphRender() {
        return lobbyText.map((obj) => <Paragraph {...obj} key={obj.id} />)
    }

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const res = await userAPI.getOneUser(localStorage.getItem('currentUser'))
                const userCards = res.data[0].cards
                console.log(userCards)
                setCards(userCards)
            } catch (err) {
                console.error("Error fetching User's cards.", err)
            }
        }
        fetchCards();

    }, [cards])

    return (
        <>
            <div className='lobby-bg'>
                <div className='col-12 text-center'>
                    <BackButton />
                </div>
                <h1 className='homeTitle'>Prepare for the Palace</h1>
                <main className='col-10 mx-auto'>
                    <div>
                        {lobbyParagraphRender()}
                    </div>
                    <div>
                        <h2 className='text-center text-white fs-1 col-12 my-5 paragraph-text'>Select your Prográmon</h2>
                        <div className='col-12 text-center border border-white row'>
                            {cards.map( (obj) => <div className='col-4 col-lg-3'><Card creature={obj} key={obj._id} /></div> )}
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