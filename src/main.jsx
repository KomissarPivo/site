import { StrictMode } from 'react'; 
import { createRoot } from 'react-dom/client'; 
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'; 
import App from './App.jsx'; 
import MP from '../src/Pages/MP/MP.jsx'; 
import { ErrorPage404 } from './Components/ErrorPage404/ErrorPage404.jsx'; 
import Catalog from '../src/Pages/Catalog/Catalog.jsx'; 
import Registration from './Pages/Registration/Registration.jsx'; 
import ReactDOM from 'react-dom/client'; 
import { Provider } from 'react-redux'; 
import Login from './Pages/Login/Login.jsx';
import {store} from './Components/Features/store.js';
import s from './index.module.css'

const router = createBrowserRouter([ 
  { 
      path: '/', 
      element: <App />, 
      errorElement: <ErrorPage404 />, 
      children: [ 
          { 
              path: '/', 
              element: <Navigate to="/MP" replace />, 
          }, 
          { 
              path: '/catalog', 
              element: <Catalog />, 
          }, 
          { 
              path: '/MP', 
              element: <MP />, 
          }, 
          { 
              path: '/login', 
              element: <Login />, 
          }, 
          { 
              path: '/registration', 
              element: <Registration />, 
          }, 
      ], 
  }, 
]); 
 
const root = createRoot(document.getElementById('root')); 
root.render( 
  <Provider store={store}> 
      <RouterProvider router={router} /> 
  </Provider> 
);