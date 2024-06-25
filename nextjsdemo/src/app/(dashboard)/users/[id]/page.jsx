import React from 'react'

export default function page({params}) {
  return (
    <div>
        <h3 className="text-3xl">User {params.id}</h3>
    </div>
  )
}
