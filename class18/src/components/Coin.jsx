import React, { useState ,useRef} from 'react'
export default function Coin() {
  const [flag,setFlag] = useState('heads');
  const [heads,setHeads] = useState(0);
  const [tails,setTails] = useState(0);
  const [flips,setFlips] = useState(0);
  let imgbox = useRef();
  let play = ()=>{
    imgbox.current.style.display = 'none';
    setTimeout(function(){
    imgbox.current.style.display = 'inline';
    },100)
    let random =  Math.random(); 
    setFlips(flips+1);
    if(random<0.5){
        setFlag('tails');
        setTails(tails+1)
    }
    else if(random>0.5){
        setFlag('heads');
        setHeads(heads+1)
    }
  }
  return (
    <div className='text-center'>
        <h1 className='display-2 text-center bg-secondary text-light p-2'>Flip The Coin..</h1>
        {
            flag=="heads"
            ? <img className='coinImage' ref={imgbox} src="heads.png" alt="heads" />
            : <img className='coinImage' ref={imgbox} src="tails.png" alt="tails"/>
        }
        <br/>
        <button onClick={play} className='btn btn-secondary'>Flip The Coin</button>
        <p className='lead'>Out of {flips} Flips there has been {heads} Heads and {tails} Tails</p>
    </div>
  )
}
