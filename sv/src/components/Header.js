import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Main';
import Singup from "./Singup";
import Singin from "./Singin";
import Flights from "./Flights";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">

            <img src={require("../assets/planeLogo.png")} className="Logo" alt="logo" />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350} classNames="NavAnimation" unmountOnExit>
                <nav className="Nav">
                    <a href="/home">Home</a>
                    <a href="/flights">Flights</a>
                    <a href="/main">About</a>
                    <button className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/signin';
                    }}>Sign In</button>
                    <button className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/signup';
                    }}>Sign Up</button>
                </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Burger">
                🍔
            </button>

            <Router>
                <Routes >

                    <Route path='/signup' element={<Singup />} />
                    <Route path='/home' element={<Main />} />
                    <Route path='/signin' element={<Singin />} />
                    <Route path='/flights' element={<Flights />} />
                </Routes >
            </Router>
        </header>

    )
}