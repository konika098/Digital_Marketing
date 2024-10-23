import { createRoot } from 'react-dom/client'
import './index.css'
import * as React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Main from './Layout/Main';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
