import React, { useState } from 'react'

export default function Addfruit({fruits,addFruits}) {
    const [fruit,setFruit] = useState('cherry')
    const add = ()=>{
        let newFruitData = [...fruits,fruit];
        addFruits(newFruitData);
        setFruit('');
    }
  return (
    <div>
        <div className="container">
            <input type="text" className="form-control" placeholder='fruit name' 
             onChange={(event)=>{setFruit(event.target.value)}} value={fruit}
            />
            <button onClick={add} data-testid='btn'>Add</button>
        </div>
    </div>
  )
}
