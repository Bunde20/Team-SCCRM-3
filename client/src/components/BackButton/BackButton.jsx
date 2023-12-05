import { Link } from 'react-router-dom'
import './BackButton.css'

export default function BackButton() {
    return (
        <>
            <Link to='/'>
                <button className='home-btn-cstm rounded my-3'>Back to Home</button>
            </Link>               
        </>

    )
}