import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './layout/Main'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Contact from './components/Contact'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Navbar></Navbar> ,
      },
      {
        path: '/home',
        element: <Home></Home> ,
      },
      {
        path: '/about',
        element: <About></About> ,
      },
      {
        path: '/blog',
        element: <Blog></Blog> ,
      },
      {
        path: '/contact',
        element: <Contact></Contact> ,
      },
  
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
