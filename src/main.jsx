import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const myRouter = createBrowserRouter([
  {
    path:"/",
    element: <div>This is home</div>
  },
  {
    path:"/info",
    element: <div>All valuable information</div>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
