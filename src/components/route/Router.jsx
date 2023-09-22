import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Layout from "../Layout";
import Products from "../Products";


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
          element: <Products></Products>
        },
      ]
    },
    
  
  ]);

export default myRouter;