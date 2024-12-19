import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Resturant from './Components/Resturant/Resturant';


// let router = createBrowserRouter([
//   {
//     path: "/",
//    element: <App/>
//   },
//   {
//     path: "/Resturant",
//    element: <Resturant/>
//   },

// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />


);


