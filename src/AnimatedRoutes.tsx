import React from "react";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import Layout from "./components/UI/Layout";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailedRecipePage from "./pages/DetailedRecipePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./index.scss";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="recipes/:id" element={<DetailedRecipePage />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound title={"Путь не найден"} />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
