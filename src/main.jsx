import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage from './assets/Pages/LandingPage.jsx'
import LoginPage from "./assets/Pages/LoginPage.jsx"
import RegisterPage from "./assets/Pages/RegisterPage.jsx"
import AboutPage from  "./assets/Pages/AboutPage.jsx"
import BenefitsPage from "./assets/Pages/BenefitsPage.jsx"
import FeaturesPage from "./assets/Pages/FeaturesPage.jsx"
import GamePage from "./assets/Pages/GamePage.jsx"
import HomePage from "./assets/Pages/HomePage.jsx"
import MateriPage from "./assets/Pages/MateriPage.jsx"
import ModulesPage from "./assets/Pages/ModulesPage.jsx"
import LutfiScriptPage from './assets/Pages/LutfiScriptPage.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LandingPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/about-us",
      element: <AboutPage />
    },
    {
      path: "/features",
      element: <FeaturesPage />
    },
    {
      path: "/benefits",
      element: <BenefitsPage />
    },
    {
      path: "/lutfiscript", 
      element: <LutfiScriptPage />
    },
    {
      path: "/lutfiscript/home", 
      element: <HomePage />
    },
    {
      path: "/lutfiscript/modules", 
      element: <ModulesPage />
    },
    {
      path: "/lutfiscript/game", 
      element: <GamePage />
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

