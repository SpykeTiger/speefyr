import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
//Pages
import Home from './views/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path: "Home",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
 