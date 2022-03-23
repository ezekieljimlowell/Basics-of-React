import React from "react";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import { About } from "./About";
import { Css } from "./Css";
import { Home } from "./Home";
import { Html } from "./Html";
import { JavaScript } from "./JavaScript";
import { ReactJs } from "./ReactJs";
import { Navbar } from "react-bootstrap";
import styles from './RouterComponent.module.css';

export const RouterComponent = () => {
    return (
        <Router>
            <nav className={`navbar navbar-expand-lg navbar-light bg-secondary navbar-expand-lg ${styles.unActivateDecoration}`}>
                <Link to="/" className="nav-link navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <div className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/html" className="nav-link">HTML</Link>
                        <Link to="/css" className="nav-link">CSS</Link>
                        <Link to="/javascript" className="nav-link">JavaScript</Link>
                        <Link to="/reactjs" className="nav-link">React JS</Link>
                    </div>
                </div>

            </nav >


            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/html" element={<Html />}></Route>
                <Route path="/css" element={<Css />}></Route>
                <Route path="/javascript" element={<JavaScript />}></Route>
                <Route path="/reactjs" element={<ReactJs />}></Route>
            </Routes>
        </Router >
    )
}
