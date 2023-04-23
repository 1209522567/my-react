import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'

import Loading from "../components/loading";
import NotFound from "../components/notFound";

import RouteList from "./pages";

const renderRouter = (routerList) => {
   return routerList.map((item) => {
      const { path, exact, noAuth, children } = item;
      const token = localStorage.getItem('token')
      if (!noAuth && !token) return <Route key={ "/login" } path="*" element={<Navigate to="/login" />} />;
      else {
         if (token && path === "/login") {
            return (
               <Route key={ "/" } path="*" element={<Navigate to="/" />} />
            )
         }
         return <Route
            key={path}
            exact={exact}
            path={path}
            element={<item.component />}
         >
            {!!children && children.map(i => {
                  return <Route
                     key={i.path}
                     exact={i.exact}
                     path={i.path}
                     element={<i.component />}
                  />
            })}
         </Route >;
      }
      
   });
};

function RoutesList() {
   return (
      <Router>
         <React.Suspense fallback={<Loading />}>
            <Routes>
               { renderRouter(RouteList) }
               < Route path="*" element={ <NotFound to="/login" /> } />
            </Routes>
         </React.Suspense>
      </Router>
   )
}

export default React.memo(RoutesList)