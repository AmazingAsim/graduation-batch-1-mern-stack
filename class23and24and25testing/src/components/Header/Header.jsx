import React from 'react'

export default function Header({topic}) {
  return (
    <div>
        <a href="">Learn react</a>
        <h1>Asim</h1>
        <p data-testid="topicbox">{topic}</p>
        <button title='btn'>Click me</button>
        <ul data-testid="fruit-list">
            <li>apple</li>
            <li>orange</li>
            <li>banana</li>
        </ul>
    </div>
  )
}
