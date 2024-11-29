import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Error4O4";
import RouteLayout from "../../Route";
import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("../Home/Home"));
const About = lazy(() => import("../About/About"));
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense> },
    ],
  },
]);
