import Index from "./Components/Index";
import { createBrowserRouter } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import Electrician from "./Components/Services/Electrician";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/details",
    element: <DetailPage/>,
  },
  {
    path: "/electrician",
    element: <Electrician/>,
  },
]);

export default router;
