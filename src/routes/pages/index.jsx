import { lazy } from "react";

const RouteList = [
   {
      path: "/about",
      title: "相关页",
      component: lazy(() => import("../../pages/about")),
   },
   {
      path: "/",
      title: "首页",
      component: lazy(() => import("../../pages/home")),
   },
   {
      path: "/login",
      title: "登录",
      exact: true,
      noAuth: true,
      component: lazy(() => import("../../pages/Login")),
   },
   {
      path: "*",
      title: "404 Not Found",
      exact: true,
      noAuth: true,
      component: lazy(() => import("../../components/notFound")),
   },
]

export default RouteList