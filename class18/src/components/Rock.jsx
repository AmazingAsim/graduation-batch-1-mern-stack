import { useState } from 'react'

export default function Rock() {

    const [computerScore,setComputerScore] = useState(0);
    const [playerScore,setPlayerScore] = useState(0) ;
    const [you,setYou]= useState('');
    const [opponent,setOpponent] = useState('')
    const [message,setMessage] = useState('')
    let obj = ['rock','paper','scissor'];
    let play = (player)=>{
        let computer = Math.floor(Math.random()*3)
        console.log(`player: ${player} and computer :${computer}`);
        setYou(obj[player]);
        setOpponent(obj[computer]);
        if(computer==player){
            setMessage('Its a draw');
        }
        else if(player == 0 && computer==1){
            setComputerScore(computerScore+1);
            setMessage('you lose')
        }
        else if(player ==0 && computer==2){
            setPlayerScore(playerScore+1);
            setMessage('you win')
        }
        else if(player==1 && computer==0){
            setPlayerScore(playerScore+1);
            setMessage('you win')
        }
        else if(player==1 && computer==2){
            setComputerScore(computerScore+1);
            setMessage('you lose')
        }
        else if(player==2 && computer==0){
            setComputerScore(computerScore+1);
            setMessage('you lose')
        }
        else if(player==2 && computer==1){
            setPlayerScore(playerScore+1);
            setMessage('you win')
        }
        
    };

  return (
    <div>
        <h1 className='display-2 text-center p-3 bg-warning fw-bolder'>Rock Paper Scissor Game</h1>

        <div className="container text-center display-5 fw-bolder">
            <div className="row">
                <div className="col-sm-6">
                    You : {you}
                </div>
                <div className="col-sm-6">
                    Opponent: {opponent}
                </div>
            </div>
        </div>
        <hr />
        <h2 className='display-6 text-info p-3 bg-secondary text-center'>{message}</h2>
        <hr />
        <div className='container text-center'>
            <div className="row">
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(0)}} className="img-fluid" src="rock.png" alt="" />
                </div>
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(1)}} className="img-fluid" src="paper.png" alt="" />
                </div>
                <div className="col-sm-4 p-2">
                    <img role="button" onClick={()=>{play(2)}} className="img-fluid" src="scissor.png" alt="" />
                </div>
            </div>
        </div>

        <div className="container text-center mt-2 display-6 fw-bold">
            <div className="row">
                <div className="col-sm-6 text-danger">
                    Computer Score: {computerScore}
                </div>
                <div className="col-sm-6 text-success">
                    Player Score : {playerScore}
                </div>
            </div>
        </div>
    </div>
  )
}
