import React from 'react'
import {  Route, Routes } from "react-router";
import Home from './pages/Home';
import Kids from './pages/Kids';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
import Header from './components/Header';
import { MyFooter } from './components/Footer';

export default function App() {
  return (
   <div>
    <Header/>
    
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kids' element={<Kids/>}/>
      <Route path='/mens' element={<Mens/>}/>
      <Route path='/womens' element={<Womens/>}/>
     </Routes>
     <MyFooter/>
   </div>
  )
}
