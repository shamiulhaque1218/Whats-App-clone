import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main.jsx';
import LoginFront from './Component/Login/LoginFront.jsx';
import AuthProvider from './Component/Provider/AuthProvider.jsx';
import PrivateRoute from './Component/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginFront />,
    errorElement: <p />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
  {
    path: "/home",
    element:  <PrivateRoute> <App /> </PrivateRoute> ,
    errorElement: <p />,
    children: [
      {
        path: "/home",
        element:  <PrivateRoute> <Main /> </PrivateRoute> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider> 
     <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
