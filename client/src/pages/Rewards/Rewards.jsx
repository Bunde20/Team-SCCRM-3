import './Rewards.css'
import rewardsChestImage from '../../images/flipped-chest.png'
import LeaveRewardsButton from '../../components/Buttons/LeaveRewardsButton'
import { useEffect, useState } from 'react'

export default function Rewards() {
    const [reward, setReward] = useState()

    function leaveHandler () {
        console.log('im useless')
    }

    return (
        <div className='col-12 rewardsBg'>
            <div className='col-10 mx-auto p-5'>
                <h1 className='homeTitle text-center'>Rewards</h1>
                <main className='text-center text-white py-3'>
                    <div className='col-xl-6 col-lg-8 col-md-10 col-12 mx-auto'>
                        <img src={rewardsChestImage} className='chestImageStyle col-12'/>                 
                    </div>
                    <p className='paragraph-text my-3 fs-3 fw-bold'>Click the chest for your rewards.</p>
                    <div className='mt-3 col-md-6 col-8 mx-auto'>
                        <LeaveRewardsButton text='Leave' path='/' leaveHandler={leaveHandler}/>
                    </div>
                </main>
            </div>
        </div>
    )
}