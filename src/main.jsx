import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "./routes.jsx"

import './index.css'

// Create Page Using Router. Loads the home page.
const router = createMemoryRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

