import { createBrowserRouter } from "react-router-dom";
import Netflix from "./assets/Netflix";

 export const router = createBrowserRouter([
   
    {
      path: "/netflix",
      element: <Netflix/>
    },
   
  ]);