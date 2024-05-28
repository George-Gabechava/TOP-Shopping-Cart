import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <NavBar></NavBar>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },      
      {
        path: "/shop",
        element: <Shop />,
      },
      // Can add a Cart page if needed
    ],
  },
];

export default routes;
