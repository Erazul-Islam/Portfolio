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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>,
)
