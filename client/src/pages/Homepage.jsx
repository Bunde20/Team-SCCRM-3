export default function Homepage() {
    return (
        <>
            <div id='welcomeEl'>
                <p className='m-5 text-end'>Welcome!</p>
            </div>
            <div className="col-10 col-md-3 mx-auto rounded homepageContainer">
                <div className="col-10 mx-auto">
                    <button className='col-10 btn btn-secondary my-5'>
                        Login
                    </button>
                </div>
                <div className="col-10 mx-auto">
                    <button className='col-10 btn btn-secondary my-5'>
                        New Game
                    </button>
                </div>
                <div className="col-10 mx-auto">
                    <button className='col-10 btn btn-secondary my-5'>
                        Continue
                    </button>
                </div>
                <div className="text-end">
                    <button className='btn btn-secondary col-10 my-5'>
                        How to Play
                    </button>
                </div>
                <div className="text-end">
                    <button className='btn btn-secondary col-10 my-5'>
                        Marketplace
                    </button>
                </div>
                <div className="col-10 mx-auto">
                    <button className='col-10 btn btn-secondary my-5'>
                        Logout
                    </button>
                </div>
            </div>
        </>
    )
}