import { Link } from 'react-router-dom'

export default function Button({path, text}) {
    return (
        <>
            <Link to={path}>
                <button className='col-10 col-md-7 my-5 home-btn-cstm rounded p-1'>
                    {text}
                </button>
            </Link>
        </>
    )
}
