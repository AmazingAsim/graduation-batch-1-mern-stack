import React from 'react'
import { useContext } from 'react'
import UserContext from '../global/userContext'
import { useDispatch } from 'react-redux'
import { setCount } from '../global/countSlice'
export default function Login() {
    let dispatch = useDispatch();
    const {user,setUser} = useContext(UserContext)
  return (
    <div>
        <div className="form">
            <input type="text" placeholder='name'  onChange={(event)=>{setUser(event.target.value)}}  />
            <button onClick={()=>{dispatch(setCount(5))}}>login</button>
        </div>
    </div>
  )
}


// store
// actions
// reducers

