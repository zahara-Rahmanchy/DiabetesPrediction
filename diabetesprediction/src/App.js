import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Prediction from "./components/Prediction";
import Maintanence from "./components/Maintanence";
import { Login } from "./components/Login";

import "./App.css";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Prediction" element={<Prediction />} />

            <Route path="/Maintanence" element={<Maintanence />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;

