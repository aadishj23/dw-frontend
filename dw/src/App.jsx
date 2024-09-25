import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Signin from './components/Signin'
import Button from './components/Button'
import Home from './components/Home'
import Account1 from './components/Account1'

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
    },
    {path: '/Account1', element: <Account1 />}
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
