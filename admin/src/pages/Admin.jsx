import React from 'react'
import SideBar from '../componets/SideBar'
import { Route, Routes } from 'react-router'
import AddProduct from '../componets/AddProduct'
import ListProduct from '../componets/ListProduct'

export default function Admin() {
  return (
    <div className='lg:flex gap-4'>
      <SideBar/>
      <Routes>
        <Route path="/addproduct" element={<AddProduct/>} />
        <Route path="/listproduct" element={<ListProduct/>} />
      </Routes>
    </div>
  )
}
