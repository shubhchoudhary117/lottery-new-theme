import { Loader } from "lucide-react";
import React, { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import MarketsPage from "../pages/MarketsPage/MarketsPage";
import PlaceBet from "../pages/PlaceBet/PlaceBet";

// Lazy imports
const Bazars = lazy(() => import("../pages/BazarsPage/BazarsPage"));


const privateRoutes = [
  { path: "/bazars", element: <Bazars /> },
    { path: "/markets", element: <MarketsPage /> },
        { path: "/place-bet", element: <PlaceBet /> },
];

const PrivateRoutes = () => {
  const routes = useRoutes(privateRoutes);

  return <Suspense fallback={<Loader />}>{routes}</Suspense>;
};

export default PrivateRoutes;
