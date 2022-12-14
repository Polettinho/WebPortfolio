import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Javascript from "./pages/Javascript";
import './Styles/App.css'

export default function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/javascript" element={<Javascript />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}