import React from 'react'
import { useParams } from 'react-router-dom'
export default function Users() {
    let param = useParams();
  return (
    <div>
     <h1>Welcome user {param.id}</h1>
    </div>
  )
}
