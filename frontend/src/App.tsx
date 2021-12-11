import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import P404 from "./pages/P404";
import PHome from "./pages/PHome";

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<PHome />} />
      <Route element={<P404 />} />
    </Routes>
  </div>
);

export default App;
