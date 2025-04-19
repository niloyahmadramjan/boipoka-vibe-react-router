import React from 'react';
import {
  createBrowserRouter,
} from "react-router";
import Home from '../Pages/Home/Home';
import Root from './Root';
import LogIn from '../Components/Form/LogIn';
import ErrorPage from '../Error/ErrorPage';



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {index: true,Component: Home},
        {path: '/login',Component: LogIn}
    ]
  },
]);
