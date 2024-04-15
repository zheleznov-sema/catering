import { Iitem } from "../types/types";
import classes from '../styles/Modal.module.css';
import { imageUrl } from '../api/api';


interface ModalProps {
    item: Iitem;
    setActive: (value: boolean) => void;
    active: boolean;
    count: number;
}
const Modal  = ({ item, setActive, active, count }: ModalProps) => {
    const handleClose = () => {
        setActive(false);
    };
    return (
        <div className={`${classes.modalBackground} ${active ? classes.active : ''}`}>
            <div className={`${classes.modalContainer} ${active ? classes.active : ''}`}>
                <button onClick={handleClose} className={classes.closeButton}>×</button>
                <div className={count > 0 ? classes.imageContainerColorModal : classes.imageContainerModal}>
            {count > 0 && <div className={classes.modalContainerColor}>{count}</div>}
                <div className={count > 0 ? classes.imageContainerColorModal : classes.imageContainerModal}>
                    </div>
                    {count > 0 && <div className={classes.modalContainerColor}>{count}</div>}
                    <img
                        src={imageUrl + item.url}
                        alt={item.itemName}
                        className={`${classes.dishImage} ${count > 0 ? classes.modalContainerColor : ''}`}
                    />
                    <h2 className={classes.dishTitle}>{item.itemName}</h2>
                    <div className={classes.dishPrice}>{item.itemPrice} ₽</div>
                    <div className={classes.dishInfo}>
                        <div>На порцию:</div>
                        <div className={classes.dishAttribute}>{item.nutritionTip.kcal} ккал</div>
                        <div className={classes.dishAttribute}>{item.nutritionTip.proteins} белки</div>
                        <div className={classes.dishAttribute}>{item.nutritionTip.fats} жиры</div>
                        <div className={classes.dishAttribute}>{item.nutritionTip.carbohydrates} углеводы</div>
                    </div>
                    <p className={classes.dishDescription}>{item.itemDescription}</p>
                </div>
            </div>
        </div>
    );
};
export default Modal;