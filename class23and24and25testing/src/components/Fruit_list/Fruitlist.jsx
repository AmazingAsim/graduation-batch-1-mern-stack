import React from 'react'

export default function Fruitlist({fruits,addFruits}) {
  return (
    <div>
        <h2>List of fruits</h2>
        <ul>
            {
                fruits.map(fruit=>(
                    <li>{fruit}</li>
                ))
            }
        </ul>
    </div>
  )
}
