import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import AppRoutes from "./components/routes/Routes";
import Navigation from "./components/navigations/Navigation";
import Bot from "./components/bot settings/bot";
import React from "react";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation/>
                <AppRoutes/>
                <Bot/>
            </Router>
        </div>
    );
}

export default App;
