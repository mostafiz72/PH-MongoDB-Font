import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <Users />,
    loader: () => fetch('http://localhost:5000/user')
  },
  {
    path: "/user/update/:id",
    element: <Update />,
    loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`)
  },
]);

import App from './App.jsx'
import Users from './Components/Users.jsx';
import Update from './Components/Update.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
