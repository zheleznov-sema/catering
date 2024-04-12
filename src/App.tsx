import React from 'react';
// Импорт компонента MenuCategories
import MenuCategories from "./components/MenuCategories";
// Импорт данных меню из локального файла JSON
import menu from './api/menu.json';
import './app.css';

// Определение функционального компонента App для основной структуры приложения
function App() {
    // 'data' - это пропс, через который передаются данные о меню в компонент MenuCategories
    return (
        <div className="App">
            <MenuCategories data={menu}/>
        </div>
    );
}

export default App;
