// Импорт React и типа FC (FunctionComponent) для использования функциональных компонентов в React
import React, { FC } from 'react';
// Импорт типа ImenuCategories, который описывает структуру данных для категории меню
import { ImenuCategories } from "../types/types";
// Импорт компонента Card, который будет использоваться для отображения каждого элемента меню
import Card from "./Card";
// Импорт стилей из файла category.module.css для стилизации компонента Category
import classes from "../styles/category.module.css";

// Определение интерфейса props для компонента Category
interface CategoryProps {
    category: ImenuCategories  // Пропс category, который содержит данные о категории меню
}

// Определение компонента Category с использованием функционального компонента FC
const Category: FC<CategoryProps> = ({ category }) => {
    // Возвращаем JSX-структуру компонента
    return (
        <div>
            {/*Заголовок категории, использующий CSS-класс title из импортированных стилей*/}
            <h2 className={classes.title}>{category.catName}</h2>
            {/*Контейнер для элементов меню, использующий CSS-класс container из импортированных стилей*/}
            <div className={classes.container}>
                {/*Итерация по массиву menuItems категории, создание компонента Card для каждого элемента*/}
                {category.menuItems.map((item) =>(
                    // Компонент Card принимает объект item и ключ itemCode
                    <Card item={item} key={item.itemCode}/>
                ))}
            </div>
        </div>
    );
};

export default Category;
