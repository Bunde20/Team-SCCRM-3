import './Rewards.css'
import rewardsChestImage from '../../images/flipped-chest.png'
import rewardsCoinsImage from '../../images/resized-coins.png'
import LeaveRewardsButton from '../../components/Buttons/LeaveRewardsButton'
import { useEffect, useState } from 'react'
import userAPI from '../../utils/userAPI'

export default function Rewards() {
    const [reward, setReward] = useState()
    const [chestClick, setChestClick] = useState(rewardsChestImage)

    useEffect( () => {
        function winValidation() {
            let validation = localStorage.getItem('playerVictory')
            if (validation) {
                localStorage.removeItem('playerVictory')

                function setCoins() {
                    if (!reward) {
                        const value = (20 + Math.floor(Math.random() * 21))
                        setReward(value)
            
                        userAPI.getOneUser(localStorage.getItem('currentUser')).then( res => {
                            let currentCoins = res.data[0].coins
                            let newCoins = currentCoins + value
                            userAPI.updateUserCoins(res.data[0]._id, newCoins)
                        })
                    } else {
                        return
                    }
                }
                setCoins()
            } else {
                window.location.href = './#/error'
            }
        }
        winValidation()
    }, [])

    function imageClick () {
        setChestClick(rewardsCoinsImage)
    }

    return (
        <div className='col-12 rewardsBg'>
            <div className='col-10 mx-auto p-5'>
                <h1 className='homeTitle text-center'>Rewards</h1>
                <main className='text-center text-white py-3'>
                    <div className='col-xl-6 col-lg-8 col-md-10 col-12 mx-auto'>
                        <img src={chestClick} className='chestImageStyle col-12' id='rewardsImage' onClick={imageClick}/>
                    </div>
                    <p className='paragraph-text my-3 fs-3 fw-bold'>{chestClick === rewardsChestImage ? 'Click the chest for your rewards.' : `You've received ${reward} coins.` }</p>
                    <div className='mt-3 col-md-6 col-8 mx-auto'>
                        <LeaveRewardsButton text='Leave' path='/' />
                    </div>
                </main>
            </div>
        </div>
    )
}