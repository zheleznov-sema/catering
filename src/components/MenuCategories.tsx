import { Imain } from "../types/types";
import Category from './Category';

interface MenuCategoriesProps {
    data: Imain 
}

const MenuCategories = ({ data }: MenuCategoriesProps) => {
    return (
        <div>
            {data.serviceTimes[0].menuCategories.map((category) => (
                <Category key={category.catCode} category={category}/>
            ))}
        </div>
    );
};

export default MenuCategories;