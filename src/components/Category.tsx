
import React, { FC } from 'react';

import { ImenuCategories } from "../types/types";

import Card from "./Card";

import classes from "../styles/category.module.css";


interface CategoryProps {
    category: ImenuCategories  
}


const Category = ({ category }: CategoryProps) => {
 
    return (
        <div>
       
            <h2 className={classes.title}>{category.catName}</h2>
        
            <div className={classes.container}>
     
                {category.menuItems.map((item) =>(
            
                    <Card item={item} key={item.itemCode}/>
                ))}
            </div>
        </div>
    );
};

export default Category;
