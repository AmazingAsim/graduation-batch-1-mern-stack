import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Dashboard() {
    let navigate = useNavigate();
  return (
    <div>
        <h1 className='dashboardBanner'>Welcome to Asim's Arcadia</h1>
        <div className='container text-center mt-3'>
            <div className="row">
                <div className="col">
                    <div className="card" onClick={()=>{navigate('coin')}} role='button'>
                        <img src="https://readriordan.com/wp-content/uploads/2019/05/RRBlog-CoinFlip-1594-v1.jpg" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4>Flip the coin game</h4>
                            <p>flip the coin and guess the correct side to win</p>
                        </div>
                    </div>
                </div>


                <div className="col">
                    <div className="card" onClick={()=>{navigate('rock')}} role='button'>
                        <img src="https://hips.hearstapps.com/hmg-prod/images/people-playing-paper-rock-scissors-royalty-free-illustration-1583269312.jpg?crop=0.997xw:0.712xh;0.00160xw,0.181xh&resize=640:*" alt="" className="card-img-top" />
                        <div className="card-body">
                            <h4>Rock paper Scissor Game</h4>
                            <p>test your luck with rock paper scissor game.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
