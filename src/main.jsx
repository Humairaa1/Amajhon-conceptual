import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'

import myRouter from './components/route/Router';

// const myRouter = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout></Layout>,
//     children:[
//       {
//         path:"/",
//         element: <Home></Home>
//       },
//       {
//         path:"/products",
//         element: <Products></Products>
//       },
//     ]
//   },
  

// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
