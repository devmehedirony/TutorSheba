import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import TutorRequest from "../pages/TutorRequest";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/request-for-tutor',
        element: <TutorRequest/> 
      }
    ]
  },
]);

export default router