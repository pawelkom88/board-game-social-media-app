import { App } from "@/App";
import Events from "@/pages/events/Events";
import Home from "@/pages/home/Home";
import Market from "@/pages/market/Market";
import Profile from "@/pages/profile/Profile";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { RoutesConfig } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/app/home" />,
    // errorElement: <ErrorPage />,
  },
  {
    path: RoutesConfig.login,
    element: <div>Login</div>,
    // errorElement: <ErrorPage />,
  },
  {
    path: RoutesConfig.signup,
    element: <div>Signup</div>,
    // errorElement: <ErrorPage />,
  },
  {
    path: RoutesConfig.app,
    element: <App />,
    children: [
      {
        path: RoutesConfig.home,
        element: <Home />,
      },
      {
        path: RoutesConfig.events,
        element: <Events />,
      },
      {
        path: RoutesConfig.market,
        element: <Market />,
      },
      {
        path: RoutesConfig.profile,
        element: <Profile />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default router;
