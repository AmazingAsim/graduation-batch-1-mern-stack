import React from 'react'

export default function Lang(props) {
  return (
    <div className='p-3 d-flex' style={{height:"300px",flexDirection:"column",
    justifyContent:"space-between",alignItems:"start"}}>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button className='btn btn-danger'>Learn More About {props.title}</button>
    </div>
  )
}
