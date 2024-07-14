import { App } from "@/App";
import Events from "@/features/events/pages/Events";
import Market from "@/features/market/pages/Market";
import AddPost from "@/features/new-post/pages/AddPost";
import Profile from "@/features/user-profile/pages/UserProfile";
import Home from "@/pages/home/Home";
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
      {
        path: RoutesConfig.newPost,
        element: <AddPost />,
      },
    ],
    // errorElement: <ErrorPage />,
  },
]);

export default router;
