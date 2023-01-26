import React from 'react'
import { Product } from '../Component/Product'
import { Wish } from '../Component/Wish'
import { Route, Routes } from "react-router-dom";
export const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/wish" element={<Wish/>}/>
        </Routes>
    </div>
  )
}
