import React from 'react'
import { Button } from './components/Button'
import Header from './components/Header'
import Products from './components/Products'

export default function App() {
  return (
    <div className='bg-black h-screen w-screen flex  flex-col'>
      <Header />
      <Products />
    </div>
  )
}
