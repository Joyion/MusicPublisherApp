import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';



// Amplify Configs 
//import { Amplify } from 'aws-amplify';
//import config from './aws-exports';
import ArtistPage from './Components/ArtistPage';
import CatalogPage from './Components/CatalogPage';
import OurStoryPage from './Components/OurStoryPage';
import NewsPage from "./Components/NewsPage";
// import { Authenticator } from '@aws-amplify/ui-react';



// Amplify.configure(config);

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/news",
        element: <NewsPage />
      },
      {
        path: "/artists",
        element: <ArtistPage />
      },
      {
        path: "/catalog",
        element: <CatalogPage />
      },
      {
        path: "/ourstory",
        element: <OurStoryPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }/*  */

    ]/*  */
  }

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

