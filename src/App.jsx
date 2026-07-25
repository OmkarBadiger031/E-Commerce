import React from 'react'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ProductDetails from './pages/ProductDetails'
import Success from './pages/Success'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/productDetails/:id' element={<ProductDetails />}/>
        <Route path='/success' element={<Success/>} />
      </Routes>
    </>
  )
}

export default App