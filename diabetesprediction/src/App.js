import React, { createContext, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Prediction from "./components/Prediction";
import Maintanence from "./components/Maintanence";
import { Login } from "./components/Login";

import "./App.css";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import SignUp from "./components/SignUp";

export const userContext = createContext();

function App() {
  const reducer = (state, action) => {
    if (action.type === "USER") {
      return action.payload;
    }
  };
  const [state, dispatch] = useReducer(reducer, false);
  return (
    <userContext.Provider value={{ state, dispatch }}>
      <div className="flex flex-col justify-between">
        <Router>
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/Prediction" element={<Prediction />} />

              {state && <Route path="/Maintanence" element={<Maintanence />} />}
              <Route path="/Login" element={<Login />} />

              <Route path="/SignUp" element={<SignUp />} />
            </Routes>
            <Footer />
          </main>
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
