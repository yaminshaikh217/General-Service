import Index from "./Components/Index";
import { createBrowserRouter } from "react-router-dom";
import DetailPage from "./Components/DetailPage";
import AirContioner from "./Components/Services/AirConditioner";
import Electrician from "./Components/Services/Electrician";
import Pest from "./Components/Services/Pest";
import Plumbing from "./Components/Services/Plumbing";
import Rocleaning from "./Components/Services/Rocleaning";
import Cleaning from "./Components/Services/Cleaning";
import TermsCondition from "./Components/TermsCondition";
import Privacy from "./Components/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/details",
    element: <DetailPage />,
  },
  {
    path: "/airconditioner",
    element: <AirContioner />,
  },
  {
    path: "/electrician",
    element: <Electrician />,
  },
  {
    path: "/plumbing",
    element: <Plumbing />,
  },
  {
    path: "/ro-cleaning",
    element: <Rocleaning />,
  },
  {
    path: "/cleaning",
    element: <Cleaning />,
  },
  {
    path: "/pest",
    element: <Pest />,
  },
  {
    path: "/terms",
    element: <TermsCondition />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
]);

export default router;
