// Импорт React и типа FC (FunctionComponent) для создания функциональных компонентов
import React, { FC } from 'react';
// Импорт типа Imain, который определяет структуру ожидаемого объекта 'data'
import { Imain } from "../types/types";
// Импорт компонента Category
import Category from './Category';

// Определение интерфейса пропсов для компонента MenuCategories
interface MenuCategoriesProps {
    data: Imain  // Пропс 'data' должен соответствовать интерфейсу Imain
}

// Определение функционального компонента MenuCategories с использованием типизации через FC
const MenuCategories: FC<MenuCategoriesProps> = ({ data }) => {
    // Итерация по массиву menuCategories первого элемента serviceTimes из полученных данных
    return (
        <div>
            {data.serviceTimes[0].menuCategories.map((category) => (
                // Для каждой категории создаётся компонент Category с ключом в виде уникального кода и передачей самой категории
                <Category key={category.catCode} category={category}/>
            ))}
        </div>
    );
};

export default MenuCategories;
