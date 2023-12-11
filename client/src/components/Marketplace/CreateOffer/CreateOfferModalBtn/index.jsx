import { Link } from 'react-router-dom'

export default function GoBack() {
    return (
        <>
            <Link to='/marketplace'> 
                <button className='home-btn-cstm rounded my-3'>Back</button>
            </Link>               
        </>

    )
}