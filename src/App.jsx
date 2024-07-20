import { useState } from 'react';
import './App.css';
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
import Branding from './Componont/Services/MainServices/Branding';
import BrandIdentity from './Componont/Services/MainServices/BrandIdentity'; // Import the BrandIdentity component
import BrandConsulting from './Componont/Services/MainServices/BrandConsulting';
import LogoDesign from './Componont/Services/MainServices/LogoDesign';
import Visualization from './Componont/Services/MainServices/2D3DVisualization';
import GraphicDesign from './Componont/Services/MainServices/GraphicDesign';
import DesignFusion from './Componont/Services/MainServices/DesignFusion';
import PersonalizedAPC from './Componont/Services/MainServices/DesignFusion/PersonalizedAPC';
import PersonalPc from './Componont/Services/MainServices/DesignFusion/PersonalPc';
import CompanyPm from './Componont/Services/MainServices/DesignFusion/CompanyPm';
import PersonalizedBCM from './Componont/Services/MainServices/DesignFusion/PersonalizedBCM';
import SocialMedia from './Componont/Services/MainServices/DesignFusion/SocialMedia';
import Brochures from './Componont/Services/MainServices/DesignFusion/Brochures';
import DigitalMarketing from './Componont/Services/MainServices/DigitalMarketing';
import SEO from './Componont/Services/MainServices/DigitalMarketing/SEO';
import SMM from './Componont/Services/MainServices/DigitalMarketing/SMM';
import PerformanceM from './Componont/Services/MainServices/DigitalMarketing/PerformanceM';
import ContentM from './Componont/Services/MainServices/DigitalMarketing/ContentM';
import MarketingA from './Componont/Services/MainServices/DigitalMarketing/MarketingA';
import Analytics from './Componont/Services/MainServices/DigitalMarketing/Analytics';
import ExperienceDesign from './Componont/Services/MainServices/ExperienceDesign';
import UIDesign from './Componont/Services/MainServices/ExperienceDesign/UIDesign';
import WebsiteDesign from './Componont/Services/MainServices/ExperienceDesign/WebsiteDesign';
import MobileExperience from './Componont/Services/MainServices/ExperienceDesign/MobileExperience';
import CommerceExperience from './Componont/Services/MainServices/ExperienceDesign/CommerceExperience';
import HMI from './Componont/Services/MainServices/ExperienceDesign/HMI';
import AandD from './Componont/Services/MainServices/ExperienceDesign/AandD';
import Technology from './Componont/Services/MainServices/Technology';
import DataAndAnalytic from './Componont/Services/MainServices/Technology/DataAndAnalytic';
import WebDevelopment from './Componont/Services/MainServices/Technology/WebDevelopment';
import MobileApp from './Componont/Services/MainServices/Technology/MobileApp';
import Ecommerce from './Componont/Services/MainServices/Technology/Ecommerce';
import AIML from './Componont/Services/MainServices/Technology/AIML';
import CyberSecurity from './Componont/Services/MainServices/Technology/CyberSecurity';
import Creativity from './Componont/Services/MainServices/Creativity';
import VideoEditing from './Componont/Services/MainServices/Creativity/VideoEditing';
import PhotoEditing from './Componont/Services/MainServices/Creativity/PhotoEditing';
import BlogWriting from './Componont/Services/MainServices/Creativity/BlogWriting';
import ContentWriting from './Componont/Services/MainServices/Creativity/ContentWriting';
import ResumeMaking from './Componont/Services/MainServices/Creativity/ResumeMaking';
import POCM from './Componont/Services/MainServices/Creativity/POCM';



const router = createBrowserRouter([
  {
    path: "/",
    element: <><ResponsiveAppBar /><Home /><Footer /></>,
  },
  {
    path: "Services",
    element: <><ResponsiveAppBar /><section><Services /><Footer /></section></>,
  },
  {
    path: "Industries",
    element: <><ResponsiveAppBar /><Industries /><Footer /></>,
  },
  {
    path: "Careers",
    element: <><ResponsiveAppBar /><Careers /><Footer /></>,
  },
  {
    path: "Contact",
    element: <><ResponsiveAppBar /><Contact /><Footer /></>,
  },
  {
    path: "About",
    element: <><ResponsiveAppBar /><About /><Footer /></>,
  },
  {
    path: "Services/Branding",
    element: <><ResponsiveAppBar /><Branding /><Footer /></>,
  },
  {
    path: "Services/MainServices/BrandIdentity", // Add the path for BrandIdentity
    element: <><ResponsiveAppBar /><BrandIdentity /><Footer /></>,
  },
  {
    path: "Services/MainServices/BrandConsulting", // Add the path for BrandConsulting
    element: <><ResponsiveAppBar /><BrandConsulting /><Footer /></>,
  },
  {
    path: "Services/MainServices/LogoDesign", // Add the path for LogoDesign
    element: <><ResponsiveAppBar /><LogoDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/2D3DVisualization", // Add the path for 2d/3d Visualization
    element: <><ResponsiveAppBar /><Visualization /><Footer /></>,
  },
  {
    path: "Services/MainServices/GraphicDesign", // Add the path for Graphic Design
    element: <><ResponsiveAppBar /><GraphicDesign /><Footer /></>,
  },
  {
    path: "Services/DesignFusion", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DesignFusion /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalizedAPC", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalizedAPC /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalPc", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalPc /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/CompanyPm", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CompanyPm /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/PersonalizedBCM", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PersonalizedBCM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/SocialMedia", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SocialMedia /><Footer /></>,
  },
  {
    path: "Services/MainServices/DesignFusion/Brochures", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Brochures /><Footer /></>,
  },
  {
    path: "Services/DigitalMarketing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DigitalMarketing /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/SEO", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SEO /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/SMM", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><SMM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/PerformanceM", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PerformanceM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/ContentM", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ContentM /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/MarketingA", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MarketingA /><Footer /></>,
  },
  {
    path: "Services/MainServices/DigitalMarketing/Analytics", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Analytics /><Footer /></>,
  },
  {
    path: "Services/ExperienceDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ExperienceDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/UIDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><UIDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/WebsiteDesign", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><WebsiteDesign /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/MobileExperience", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MobileExperience /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/CommerceExperience", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CommerceExperience /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/HMI", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><HMI /><Footer /></>,
  },
  {
    path: "Services/MainServices/ExperienceDesign/AandD", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><AandD /><Footer /></>,
  },
  {
    path: "Services/Technology", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Technology /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/DataAndAnalytic", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><DataAndAnalytic /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/WebDevelopment", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><WebDevelopment /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/MobileApp", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><MobileApp /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/Ecommerce", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Ecommerce /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/AIML", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><AIML /><Footer /></>,
  },
  {
    path: "Services/MainServices/Technology/CyberSecurity", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><CyberSecurity /><Footer /></>,
  },
  {
    path: "Services/Creativity", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><Creativity /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/VideoEditing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><VideoEditing /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/PhotoEditing", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><PhotoEditing /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/BlogWriting", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><BlogWriting /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/ContentWriting", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ContentWriting /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/ResumeMaking", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><ResumeMaking /><Footer /></>,
  },
  {
    path: "Services/MainServices/Creativity/POCM", // Add the path for Design Fusion
    element: <><ResponsiveAppBar /><POCM /><Footer /></>,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
