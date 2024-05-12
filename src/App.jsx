import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './Componont/Navbar/Nav'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Componont/Home/Home';
import Careers from '../src/Componont/Careers/Careers';
import Contact from '../src/Componont/Contact/Contact';
import Services from './Componont/Services/Services';


const router = createBrowserRouter([
  
  {
    path: "/",
    element:<><ResponsiveAppBar/><Home/></>
  },

  {
    path: "Services",
    element:<><ResponsiveAppBar/><Services/></>
  },

  {
    path: "Careers",
    element:<><ResponsiveAppBar/><Careers/></>
  },

  {
    path: "Contact",
    element:<><ResponsiveAppBar/><Contact/></>
  },

 

  

]);


function App() {
  

  return (
    <>
    
     <RouterProvider router={router} />
     
    </>
  )
}

export default App
