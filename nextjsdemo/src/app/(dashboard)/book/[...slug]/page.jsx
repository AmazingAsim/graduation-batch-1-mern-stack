// 'use client'

import React from 'react'
console.log('this is a com')
export default function page({params}) {
  return (
    <div>
        <h2 className="text-4xl">Books</h2>
        {
            params.slug.map(param=>(
                <ul>
                  <li>{param}</li>
                </ul>
            ))
        }
    </div>
  )
}
