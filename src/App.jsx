import Index from "./Components/Index";
import { createBrowserRouter, Route } from "react-router-dom";
import DetailPage from "./Components/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/details",
    element: <DetailPage/>,
  },
]);

export default router;
