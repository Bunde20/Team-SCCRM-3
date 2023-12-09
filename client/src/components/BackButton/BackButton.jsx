import { Link } from 'react-router-dom'

export default function BackButton( {text} ) {
    return (
        <>
            <Link to='/'>
                <button className='home-btn-cstm rounded my-3'>{text}</button>
            </Link>               
        </>

    )
}