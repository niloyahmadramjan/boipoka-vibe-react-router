import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import ErrorPage from "../Error/ErrorPage";
import BooksList from "../Pages/BooksList/BooksList";
import ReadPages from "../Pages/ReadPages/ReadPages";
import BooksDetails from "../Pages/BooksDetails/BooksDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/booksData.json"),
        Component: Home,
      },
      { path: "booksList", Component: BooksList },
      { 
        path: "readPages", 
        loader: () => fetch("/booksData.json"),
        Component: ReadPages
       },
      {
        path: "booksDetailts/:bookId",
        loader: () => fetch("/booksData.json"),
        Component: BooksDetails,
      },
    ],
  },
]);
