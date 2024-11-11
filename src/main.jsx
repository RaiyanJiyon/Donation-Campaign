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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/donation/:id",
        element: <DonationDetails />,
        loader: () => fetch('/donation.json')
      },
      {
        path: "/donation",
        element: <Donation />
      },
      {
        path: "/statistics",
        element: <Statistics />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
