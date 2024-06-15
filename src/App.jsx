import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './Componont/Navbar/Nav';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../src/Componont/Home/Home';
import Careers from '../src/Componont/Careers/Careers';
import Contact from '../src/Componont/Contact/Contact';
import Services from './Componont/Services/Services';
import Footer from './Footer/Footer';
import About from './Componont/About Us/About';
import Industries from './Componont/Industries/Industries';


const router = createBrowserRouter([
  
  {
    path: "/",
    element:<><ResponsiveAppBar/><Home/><Footer /></>
  },

  {
    path: "Services",
    element:<><ResponsiveAppBar/><section><Services/><Footer /></section></>
  },

  {
    path: "Industries",
    element:<><ResponsiveAppBar/><section><Industries/><Footer /></section></>
  },

  {
    path: "Careers",
    element:<><ResponsiveAppBar/><Careers/><Footer /></>
  },

  {
    path: "Contact",
    element:<><ResponsiveAppBar/><Contact/><Footer /></>
  },

  {
    path: "About",
    element:<><ResponsiveAppBar/><About/><Footer /></>
  }, 

  

]);


function App() {
  

  return (
    <>
    <div>
     <RouterProvider router={router} />
     </div>
    </>
  )
}

export default App
