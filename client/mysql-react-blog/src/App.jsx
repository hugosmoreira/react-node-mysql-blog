import { useState } from 'react'
import React from "react";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Register from './pages/Register'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Single from './pages/Single'
import Write from './pages/Write'
import "../src/style.scss";


const Layout = () => {
  return (
    <>
      <Navbar />
      
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}


export default App
