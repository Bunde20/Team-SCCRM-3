import {Link} from 'react-router-dom'

export default function BeginButton() {
    return (
        <Link to='/game'>
            <button className='continue-btn-cstm rounded'>Enter Palace</button>
        </Link>
    )
}