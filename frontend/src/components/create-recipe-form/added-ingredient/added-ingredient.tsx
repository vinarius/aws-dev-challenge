import React, {FC, useContext, useState} from 'react';

import './added-ingredient.css';

import {Context} from '../../contextProvider/contextProvider';

interface IAddedIngredientProps {
  name: string;
  amount: number;
  measurementType: string;
  elementKey: number;
  key: string;
}

export const AddedIngredient: FC<IAddedIngredientProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const {
    removeFromTempIngredientList
  } = useContext(Context);

  const handleMouseEnter = () => {
    setIsHovering(true)
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const ingredientButtonClasses = `remove-ingredient-button ${isHovering ? '' : 'hide-element'}`;
  const ingredientRowClasses = `ingredient-row ${isHovering ? 'ingredient-row-border' : ''}`;

  return (
    <div className={ingredientRowClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{`${props.amount} ${props.measurementType} ${props.name}`}</p>
      <button className={ingredientButtonClasses} onClick={()=>{removeFromTempIngredientList?.(props.name)}}>X</button>
    </div>
  );
};