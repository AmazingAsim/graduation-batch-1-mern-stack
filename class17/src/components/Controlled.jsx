import React, { useState } from 'react'

export default function Controlled() {
    const [username,setUsername] = useState('Asim sheikh');
    const [email,setEmail] = useState('asim@gmail.com');
    const [password,setPassword]  = useState('phone@123')
    let submitData = ()=>{
        let newData = {username,email,password};
        console.log(newData)
    }
  return (
    <div>
        <h2>Controlled forms</h2>

        <div className='form'>
            <input type="text" placeholder='Username' defaultValue={username}
            onKeyUp={(event)=>{
                if(event.key=='Enter'){
                    setUsername(event.target.value);
                }
            }} />
            <input type="email" placeholder='Email'
             onKeyUp={(event)=>{
                if(event.key=='Enter'){
                    setEmail(event.target.value);
                }
            }}
            />
            <input type="password" placeholder='password'
             onKeyUp={(event)=>{
                if(event.key=='Enter'){
                    setPassword(event.target.value);
                }
            }}
            />
            <button onClick={submitData}>Submit</button>
            <hr />
            <h4>Name:{username}</h4>
            <h4>Email:{email}</h4>
            <h4>Password:{password}</h4>
        </div>
    </div>
  )
}
