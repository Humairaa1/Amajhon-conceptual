import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Products from "../Products";
import Dashboard from "../Dashboard";


const myRouter = createBrowserRouter([
    {
      path:"/",
      element: <Layout></Layout>,
      children:[
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/products",
          element: <Products></Products>,
          loader:()=>fetch(`https://dummyjson.com/products`)
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>
        },
      ]
    },
    
  
  ]);

export default myRouter;