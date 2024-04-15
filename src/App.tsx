import React from 'react';
import MenuCategories from "./components/MenuCategories";
import menu from './api/menu.json';
import './app.css';

function App() {
    return (
        <div className="App">
            <MenuCategories data={menu}/>
        </div>
    );
}

export default App;
