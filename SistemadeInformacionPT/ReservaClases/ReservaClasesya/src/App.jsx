//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './index.css'
import React from 'react'
//enrutamiento
import {  createBrowserRouter, 
  RouterProvider, 
  Outlet, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom';
// components
import Header from './components/header'
import Footer from './components/footer'
// pages

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './components/Register';


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Login/>}/>
        <Route path='/registro' element={<Register/>}/>
        <Route path='/home' element={<Home/>}/>
        
        
        
      </Route>
    )
  )

  return (
    <div className='App'>
  <RouterProvider router={router} />

  </div>
  ) 
 
}

export default App
const Root = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div>
      <Outlet/>
    </div>
    <div>
    <Footer/>
    </div>
   

    </>
    
  )
}

