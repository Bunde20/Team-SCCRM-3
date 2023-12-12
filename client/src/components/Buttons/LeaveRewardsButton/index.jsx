import { Link } from 'react-router-dom'

export default function LeaveRewardsButton({path, text, leaveHandler}) {
    return (
        <Link to={path} onClick={leaveHandler}>
            <button className='col-10 col-md-7 my-4 leave-btn-cstm rounded p-1'>
                {text}
            </button>
        </Link>
    )
}