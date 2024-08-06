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
import Branding from './Componont/Services/MainServices/Branding'



const router = createBrowserRouter([
  
  {
    path: "/",
    element:<><ResponsiveAppBar/><Home/><section><Footer /></section></>
  },

  {
    path: "Services",
    element:<><ResponsiveAppBar/><section><Services/><Footer /></section></>
  },

  {
    path: "Industries",
    element:<><ResponsiveAppBar/><Industries/><section><Footer /></section></>
  },

 
  {
    path: "Careers",
    element:<><ResponsiveAppBar/><Careers/><section><Footer /></section></>
  },


  {
    path: "Contact",
    element:<><ResponsiveAppBar/><Contact/><section><Footer /></section></>
  },

  {
    path: "About",
    element:<><ResponsiveAppBar/><About/><section><Footer /></section></>
  }, 

  {
    path: "Services/Branding",
    element:<><ResponsiveAppBar/><Branding/><section><Footer /></section></>
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
