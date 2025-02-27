import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import TutorRequest from "../pages/TutorRequest";
import Home from "../pages/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home/>
    },
      {
        path: '/request-for-tutor',
        element: <TutorRequest/> 
      }
    ]
  },
]);

export default router