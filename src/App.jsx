import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Services from './Services/Services';
import Careers from './Careers/Careers';
import Contact from './Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <><Navbar /><Home /></>,
  },

  {
    path: "/Services",
    element:  <><Navbar /><Services /></>,
  },

  {
    path: "/Careers",
    element:  <><Navbar /><Careers /></>,
  },
 
  {
    path: "/Contact",
    element:  <><Navbar /><Contact /></>,
  },


]);


function App() {

  return (
    <>
    
    
    <RouterProvider router={router} />
    </>
  )
}

export default App;
