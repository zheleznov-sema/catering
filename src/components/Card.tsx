// Импорт React и его хуков FC (FunctionComponent), useEffect и useState для создания компонента и управления состоянием
import React, { useState } from 'react';
// Импорт типа Iitem, описывающего структуру данных элемента
import { Iitem } from "../types/types";
// Импорт библиотеки axios для выполнения HTTP-запросов
import classes from '../styles/card.module.css';
// Импорт компонента Modal для модального окна
import Modal from "./Modal";
import { imageUrl } from '../api/api';



interface CardProps {
    item: Iitem 
}

const Card = ({ item }: CardProps) => {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(0);


    const toggleModal = () => setActive(prevActive => !prevActive);
    const incrementCount = () => setCount(prevCount => prevCount + 1);
    const decrementCount = () => setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);


    return (
        <>
            {active && (
                <Modal
                    item={item}
                    active={active}
                    setActive={setActive}
                    count={count}
                />
            )}
            <div className={classes.card} >
                <div
                    className={
                        count > 0 ? classes.imageContainerColor : classes.imageContainer
                    }
                >
                    {count > 0 && <div className={classes.countItem}>{count}</div>}
                    <img
                        onClick={toggleModal}
                        className={count > 0 ? classes.imgCount : classes.img}
                        alt={item.itemName}
                        src={imageUrl + item.url}
                    />
                </div>
                <div className={classes.info}>
                    <h3 className={classes.title}>{item.itemName}</h3>
                    <span className={classes.weight}>{item.itemWeight} г</span>
                </div>
                <div className={classes.counter}>
                    <button onClick={decrementCount} className={classes.counterButton}>-</button>
                    <span className={classes.cost}>{item.itemPrice} ₽</span>
                    <button onClick={incrementCount} className={classes.counterButton}>+</button>
                </div>
            </div>
        </>
    );
};

export default Card;
