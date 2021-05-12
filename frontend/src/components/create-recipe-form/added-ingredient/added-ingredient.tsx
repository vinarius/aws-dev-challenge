import React, {FC, useContext} from 'react';

import './added-ingredient.css';

import {Context} from '../../contextProvider/contextProvider';

interface IAddedIngredientProps {
  name: string;
  amount: number;
  measurementType: string;
  removeIngredient?: (name: string) => void;
}

export const AddedIngredient: FC<IAddedIngredientProps> = (props) => {

  const {
    removeFromTempIngredientList
  } = useContext(Context);

  return (
    <div className="ingredient-row">
      <p>{`${props.amount} ${props.measurementType} ${props.name}`}</p>
      <button className="remove-ingredient-button" onClick={removeFromTempIngredientList}>X</button>
    </div>
  );
};