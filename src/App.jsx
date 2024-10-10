import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Leadership } from './components/Leadership'
import { AdvityaDescription } from './components/AdVITyaDescription'

function App() {
  

  return (
    <div className='bg-black w-full'>
      Advitya Website
      <Leadership/>
      <AdvityaDescription classname="bg-black"/>
    </div>
  )
}

export default App
