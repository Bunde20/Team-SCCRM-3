import React, { useState } from 'react'

import Paragraph from '../../components/Paragraph'
import BackButton from '../../components/Buttons/BackButton'
import './HowToPlay.css'
import Footer from '../../components/Footer'


export default function HowToPlay() {
    const tutorialParagraphs = [
        {
            id: 0,
            text: "Hello there! Welcome to Prográmon Palace, adventurer! This world is inhabited by creatures called Prográmon. For some people, Prográmon are pets. For others, they're a companion to safeguard you as you explore the mysterious Palace located in the wilds."
        },
        {
            id: 1,
            text: "Speaking of the Palace, you're currently staying in the adventurer town located right outside the walls! Here you can prep for your plunge into the unknown by selecting your team or visiting the marketplace where you can trade for other user's Prográmon or purchase those supplied by the stall keepers! Remember adventurer, you can only bring 3 Prográmon with you into the Palace, so be sure to choose wisely."
        },
        {
            id: 2,
            text: "Let's talk about your Prográmon real quick, adventurer. There are 3 basic types: Attacker, Defender, and Trickster. Each has strengths and weaknesses, and a set amount of HP. When in the Palace, your Prográmon will synergize together to take on the enemies you encounter. Maximizing this synergy effect is up to you, so be cognizant of the make-up of your team. If your team passes out, you'll be forced to make a quick retreat from the Palace, lest the Prográmon in there make quick work of you!"
        },
        {
            id: 3,
            text: "Making it into the depths of the Palace is sure to be rewarding! Your very own Prográmon legend is about to unfold! A world of dreams and adventures with Prográmon awaits! Let's go!"
        }
    ]

    return (
        <>
            <div className='col-12 mx-auto p-1 homepage-bg'>
                <header className='col-10 mx-auto text-center'>
                    <BackButton text='Back to Home' />
                    <p className='homeTitle'>Prográmon Palace</p>
                </header>
                <main className='col-12 mx-auto'>
                    {tutorialParagraphs.map((obj) => <Paragraph {...obj} key={obj.id}/>)}
                </main>
                <Footer />
            </div>
        </>
    )
}