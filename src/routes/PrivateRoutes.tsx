import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import PlaceBet from "../pages/PlaceBet/PlaceBet";
import Markets from "../pages/Markets/Markets";
import Loader from "../components/Loader/Loader";

// Lazy imports
const Bazars = lazy(() => import("../pages/BazarsPage/BazarsPage"));


const privateRoutes = [
  { path: "/bazars", element: <Bazars /> },
  { path: "/markets", element: <Markets /> },
  { path: "/place-bet", element: <PlaceBet /> },
];

const PrivateRoutes = () => {
  const routes = useRoutes(privateRoutes);

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};

export default PrivateRoutes;
