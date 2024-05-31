
import React from 'react'
import { useContext } from 'react'
import UserContext from '../global/userContext'
import { useSelector,useDispatch } from 'react-redux'
export default function Dashboard() {
    const {user} = useContext(UserContext)
    const count = useSelector(state=>state.count.count)
  return (
    <div>
        <h2>Dashboard</h2>
        <h4>User: {user}</h4>
        <h4>count: {count}</h4>
    </div>
  )
}
