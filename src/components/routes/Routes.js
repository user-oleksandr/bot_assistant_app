import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import AboutPage from '../pages/aboutPage/AboutPage';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
};

export default AppRoutes;
