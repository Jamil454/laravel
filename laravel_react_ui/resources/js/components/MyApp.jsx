import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function MyApp() {
    return (
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/contact" element={<Contact /> } />
        </Routes>
    );
}

export default MyApp;

if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <MyApp />
        </BrowserRouter>
            , document.getElementById('app'));
}
