import React from "react";
import Game from "./Game";
import Menu from "./Menu";
import "../styles/App.scss";


/**
 * Renders a show or episode page
 */
const App = () => {
    return (
        <main className="main-container">
            <h1>Bowling score calculator</h1>
            <Menu/>
            <Game/>
            
        </main>
    )
}

export default App;