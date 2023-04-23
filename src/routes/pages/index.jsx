import { lazy } from "react";

const RouteList = [
   {
      path: "/about",
      title: "About",
      component: lazy(() => import("../../pages/about")),
   },
   {
      path: "/",
      title: "Home",
      component: lazy(() => import("../../pages/home")),
   },
   {
      path: "/login",
      title: "登录",
      exact: true,
      noAuth: true,
      component: lazy(() => import("../../pages/Login")),
   },
]

export default RouteList