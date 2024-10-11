import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from "./Root";
import ChildDashboard from "./ChildDashboard";
import ParentDashboard from "./ParentDashboard";
import LandingPage from "./LandingPage";

function Routes(){
let BrowserRouter = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          element: <LandingPage/>,
        },
        {
          path: "parent",
          element: <ParentDashboard/>,
        },
        {
          path: "child",
          element: <ChildDashboard />,
        }
      ],
    },
  ]);

  return <RouterProvider router={BrowserRouter} />;
}
export default Routes;