// Импорт React и его хуков для создания функционального компонента и управления состоянием
import React, { FC, useEffect, useState } from 'react';
// Импорт типа Iitem, который описывает структуру данных элемента меню
import { Iitem } from "../types/types";
// Импорт стилей для компонента Modal
import classes from '../styles/Modal.module.css';

// Определение интерфейса пропсов для компонента Modal
interface ModalProps {
    onClick: () => void; // Функция, которая будет вызвана при закрытии модального окна
    item: Iitem; // Данные элемента меню для отображения в модальном окне
    img: string | undefined; // Ссылка на изображение элемента или undefined
}

// Определение компонента Modal
const Modal: FC<ModalProps> = ({ onClick, item, img }) => {
    // Состояние для управления видимостью модального окна
    const [isActive, setIsActive] = useState(false);

    // Хук useEffect для активации модального окна после его монтирования
    useEffect(() => {
        setIsActive(true);
    }, []);

    // Функция для обработки закрытия модального окна
    const handleClose = () => {
        setIsActive(false); // Сначала делаем окно неактивным
        setTimeout(onClick, 300); // Затем вызываем функцию onClick с задержкой для анимации
    };

    return (
        <div className={`${classes.modalBackground} ${isActive ? classes.active : ''}`}>
            <div className={`${classes.modalContainer} ${isActive ? classes.active : ''}`}>
                <button onClick={handleClose} className={classes.closeButton}>&times;</button>
                <img src={img} alt={item.itemName} className={classes.dishImage}/>
                <h2 className={classes.dishTitle}>{item.itemName}</h2>
                <div className={classes.dishPrice}>{item.itemPrice} ₽</div>
                <div className={classes.dishInfo}>
                    <div>На порцию:</div>
                    <div className={classes.dishAttribute}>{item.nutritionTip.kcal} ккал</div>
                    <div className={classes.dishAttribute}>{item.nutritionTip.proteins} белки</div>
                    <div className={classes.dishAttribute}>{item.nutritionTip.fats} жиры</div>
                    <div className={classes.dishAttribute}>{item.nutritionTip.carbohydrates} углеводы</div>
                </div>
                <p className={classes.dishDescription}>
                    {item.itemDescription}
                </p>
            </div>
        </div>
    );
};
export default Modal;
