import CardDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cards />} />
        <Route path="/cart/:id" element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
