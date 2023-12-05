import React, { useState } from 'react'
import Paragraph from '../../components/Paragraph'

import './HowToPlay.css'

export default function HowToPlay() {
    const tutorialParagraphs = [
        {
            id: 0,
            text: "Hello there! Welcome to Prográmon Palace, adventurer! This world is inhabited by creatures called Prográmon. For some people, Prográmon are pets. For you, they're a companion to safeguard you as you explore the mysterious Palace located in the wilds."
        },
        {
            id: 1,
            text: "Speaking of the Palace, you're currently staying in the adventurer town located right outside the walls! Here you can prep for your plunge into the unknown by selecting your team or visiting the marketplace where you can trade for other user's Prográmon or purchase those supplied daily by the stall keepers! Remember adventurer, you can only bring 3 Prográmon with you into the Palace, so be sure to choose wisely."
        },
        {
            id: 2,
            text: "Let's talk about your Prográmon real quick, adventurer. There are 3 basic types: Attacker, Defender, and Trickster. Each has strengths and weaknesses, as well as HP. If their HP hits zero, they'll pass out. If your whole team passes out, you'll be forced to make a quick retreat from the Palace, lest the Prográmon in there make quick work of you!"
        },
        {
            id: 3,
            text: "Your very own Prográmon legend is about to unfold! A world of dreams and adventures with Prográmon awaits! Let's go!"
        }
    ]

    function tutorialParagraphRender() {
        return tutorialParagraphs.map((obj) => <Paragraph {...obj} key={obj.id}/>)
    }

    return (
        <>
            <div className='col-12 mx-auto p-1 homepage-bg'>
                <div className='col-10 mx-auto text-center'>
                    <p className='homeTitle'>Prográmon Palace</p>
                </div>
                <div className='col-12 mx-auto'>
                    {tutorialParagraphRender()}
                </div>
            </div>
        </>
    )
}