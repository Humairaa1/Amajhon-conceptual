import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Products from "../Products";
import Dashboard from "../Dashboard";
import ProductDetails from "../ProductDetails";


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
          path:"/productDetails/:id",
          loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
          element: <ProductDetails></ProductDetails>,
        },
        {
          path:"/dashboard",
          element: <Dashboard></Dashboard>
        },
      ]
    },
    
  
  ]);

export default myRouter;