import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Login from './components/Signin'
import LogOut from './components/Logout'
import Button from './components/Button'
import Home from './components/Home'
import Account1 from './components/Account1'
import Account2 from './components/Account2'
import Account3 from './components/Account3'
import Account4 from './components/Account4'
import Beneficiery1 from './components/Beneficiery1'
import Beneficiery2 from './components/Beneficiery2'
import Beneficiery3 from './components/Beneficiery3'
import Beneficiery4 from './components/Beneficiery4'  
import Beneficiery5 from './components/Beneficiery5'


function App() {
  const router = createBrowserRouter([
    {
      path: '/signin',
      element: 
      <div>
        <Login />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/logout',
      element:
      <div>
        <LogOut />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/Account1', 
      element: 
      <div>
        <Account1 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Account2', 
      element: 
      <div>
        <Account2 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Account3', 
      element: 
      <div>
        <Account3 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Account4', 
      element: 
      <div>
        <Account4 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Beneficiery1',
      element:
      <div>
        <Beneficiery1 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Beneficiery2',
      element:
      <div>
        <Beneficiery2 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Beneficiery3',
      element: 
      <div>
        <Beneficiery3 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Beneficiery4',
      element:
      <div>
        <Beneficiery4 />
        <Button path="/" text="Home" />
      </div>
    },
    {
      path: '/Beneficiery5',
      element:
      <div>
        <Beneficiery5 />
        <Button path="/" text="Home" />
      </div>
    }
  ])

  return (
    <div className="min-h-screen bg-gray-100">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
