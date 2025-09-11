import React, { useEffect } from "react";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";


const Application = () => {

  // disabled zooming
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && ["+", "-", "0"].includes(event.key)) {
        event.preventDefault();
      }
    };

    const handleGesture = (event: Event) => {
      event.preventDefault();
    };

    document.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("gesturestart", handleGesture);

    return () => {
      document.removeEventListener("wheel", handleWheel);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("gesturestart", handleGesture);
    };
  }, []);


  return (
    <BrowserRouter>
      <PublicRoutes />
      <PrivateRoutes />
    </BrowserRouter>
  );
};

export default Application;
