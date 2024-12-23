import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Introduction from './Components/Introduction/Introduction';
import Signup from './Pages/signup/Signup';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Login from './Pages/login/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import UserDashboard from './Pages/Dashboard/userDashboard';
import About from './Components/About/About';
import Blog from './Pages/Dashboard/Blog';
import Project from './Pages/Dashboard/Project';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/introduction',
        element: <Introduction />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
      // {
      //   path: '/dashboard',
      //   element: <Dashboard />
      // },
      {
        path: '/userDashboard',
        element: <UserDashboard />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  },
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/admin/dashboard/blog',
        element: <Blog />
      },
      {
        path: '/admin/dashboard/project',
        element: <Project />
      },
      {
        path: '/admin/dashboard/skills',
        element: <Project />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
