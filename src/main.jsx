import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/Layout/Root";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";
import Donation from "./pages/Donation";
import DonationDetails from "./pages/DonationDetails";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/ErrorPage";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/:id",
        element: <DonationDetails />,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation />,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch('/donation.json')
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </React.StrictMode>
);
