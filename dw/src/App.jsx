import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signin from './components/Signin'
import Button from './components/Button'
import Home from './components/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: '/signin',
      element: 
      <div>
        <Signin />
        <Button path="/" text="Home" />
      </div>
      
      
    },
    {
      path: '/',
      element: <Home />
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
