import React from 'react'
import NavBar from './componets/NavBar'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className='bg-primary text-tertiary'>
      <NavBar/>
      <Admin/>
    </div>
  )
}
