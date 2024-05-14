import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "./routes.jsx"

// might want to try createMemoryRouter
const router = createMemoryRouter(routes, {
  initialEntries: ["/", "/Shop.jsx"],
  initialIndex: 0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
