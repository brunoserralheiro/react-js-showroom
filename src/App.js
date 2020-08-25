import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import Admin from "./views/Admin";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <header>
            <Link to="/">Showroom</Link>
            <Link to="/admin">Admin</Link>
          </header>
          <main>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={Home} exact />
          </main>
          <footer>By Bruno </footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
