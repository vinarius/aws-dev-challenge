import React, {FC, useContext, useState} from 'react';

import './added-instruction.css';

import {Context} from '../../contextProvider/contextProvider';

interface IAddedInstructionProps {
  step: string;
  elementKey: number;
}

export const AddedInstruction: FC<IAddedInstructionProps> = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const {
    removeFromTempInstructionList
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
    <div className={ingredientRowClasses} key={props.elementKey} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{`${props.elementKey + 1}. ${props.step}`}</p>
      <button className={ingredientButtonClasses} onClick={()=>{removeFromTempInstructionList?.(props.step)}}>X</button>
    </div>
  );
};