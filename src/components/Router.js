import React, { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from '../pages/Auth';
import Home from '../pages/Home';

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route path='/' exact element={<Home/>}/>
                ) : (
                    <Route path='/' exact element={ <Auth/>}/>
                )}
            </Routes>
        </Router>
    ); 
}

export default AppRouter;