import "./App.css";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";
import Pricing from "./Components/Pricing";
import Checkout  from "./Components/Checkout";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services/:slug" element={<Pricing />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </Router>
        </div>
    );
}; 

export default App;
