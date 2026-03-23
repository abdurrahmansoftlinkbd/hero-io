import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Apps from "../pages/Apps";
import AppDetails from "../pages/AppDetails";
import axios from "axios";
import NoAppFound from "../pages/NoAppFound";
import PageNotFound from "../pages/PageNotFound";
import Installation from "../pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <PageNotFound></PageNotFound>,
    children: [
      { index: true, Component: Home },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          const res = await axios.get("/apps.json");
          const app = res.data.find((a) => a.id === Number(params.id));
          return app;
        },
        errorElement: <NoAppFound></NoAppFound>,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);

export default router;
