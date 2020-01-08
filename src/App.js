import React from "react";
import Home from "./views/home/home";
import Dashboard from "./views/dashboard/dashboard";
import NavBar from "./components/navbar";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
