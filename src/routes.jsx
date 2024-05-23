import Home from "./Home";
import Shop from "./Shop";
import NavBar from "./NavBar";

const routes = [
  {
    path: "/",
    element: <NavBar></NavBar>,
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
