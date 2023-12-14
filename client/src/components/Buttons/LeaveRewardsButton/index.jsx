import { Link } from 'react-router-dom'

export default function LeaveRewardsButton({path, text}) {
    return (
        <Link to={path}>
            <button className='col-10 col-md-7 my-4 leave-btn-cstm rounded p-1'>
                {text}
            </button>
        </Link>
    )
}