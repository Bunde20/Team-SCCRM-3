import { Link } from 'react-router-dom'

export default function Button({path, text}) {
    return (
        <>
            <Link to={path}>
                <button className='col-10 btn btn-secondary my-5'>
                    {text}
                </button>
            </Link>
        </>
    )
}
