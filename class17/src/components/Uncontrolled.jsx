import React, { useEffect } from 'react'
import { useRef } from 'react'
export default function Uncontrolled() {
  let username = useRef();
  let email = useRef();

  const submitdata = ()=>{
    let newData = {username:username.current.value,email:email.current.value}
    console.log(newData)
  }
  return (
    <div>
    <h1>Uncontrolled form</h1>
     <div className="form">
        <input type="text" placeholder='Username'  ref={username}  />
        <input type="email" placeholder='email' ref={email} />
        <button onClick={submitdata}>Submit</button>
        
     </div>

    </div>
  )
}
