import BackButton from '../../components/BackButton/BackButton'
import Paragraph from '../../components/Paragraph'
import './Lobby.css'

export default function Lobby() {
    const lobbyText = [
        {
            id: 0,
            text: "Here you can prepare for your adventure! Remember, you must choose 3 Prográmon to take with you. Choose wisely and good luck in there, adventurer!"
        }
    ]

    function lobbyParagraphRender() {
        return lobbyText.map((obj) => <Paragraph {...obj} key={obj.id} />)
    }

    return (
        <>
            <body className='lobby-bg'>
                <div className='col-12 text-center'>
                    <BackButton />
                </div>
                <h1 className='homeTitle'>Prepare for the Palace</h1>
                <main className='col-10 mx-auto'>
                    <div>
                        {lobbyParagraphRender()}
                    </div>
                    <div className='text-center'>
                        <button className='continue-btn-cstm rounded'>Continue</button>
                    </div>

                </main>
            </body>
        </>

    )
}