import { useEffect, useState } from 'react'
import './App.css'
import Maincomp from './maincomp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/about';
import Contact from './components/contact';
function App() {

  

  return (

    <BrowserRouter>

    <Routes>
      <Route path="/" element={
      <Maincomp></Maincomp>
      }/>

      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App
