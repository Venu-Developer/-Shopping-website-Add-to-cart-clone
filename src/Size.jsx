import React from 'react'
import { Outlet } from 'react-router-dom'

function Size() {
  return (
    <div>Size
        <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Size