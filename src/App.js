import "./App.css";
import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import React from "react";
import Home from "./Components/Home";

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    );
}; 

export default App;
