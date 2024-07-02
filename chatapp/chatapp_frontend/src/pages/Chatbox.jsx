import React from 'react'
import { useParams } from 'react-router-dom'
export default function Chatbox() {
    const {sender,receiver} = useParams()
  return (
    <div>
      sender:{sender}
      receiver:{receiver}
    </div>
  )
}
