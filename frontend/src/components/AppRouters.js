import React from 'react';
import { authRoute, publicRoutes } from "../routes";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";



const AppRouters = () => {

  const isLogined = useSelector((state) => state.auth.isLogined);
  return(
  <Routes>
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={Component} />
    ))}

    {isLogined && authRoute.map(({path, Component}) => (
      <Route key={path} path={path} element={Component} />
    ))}
  </Routes>
  )
    };

export default AppRouters;