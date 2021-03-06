import React, {FC, useContext, useState} from 'react';

import './added-instruction.css';

import {Context} from '../../contextProvider/contextProvider';
import {toSentenceCase} from '../../../utilities/stringCasing';

interface IAddedInstructionProps {
  step: string;
  elementKey: number;
  key: string;
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
  const instructionDisplayText = toSentenceCase(`${props.elementKey + 1}. ${props.step}`);

  return (
    <div className={ingredientRowClasses} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>{instructionDisplayText}</p>
      <button className={ingredientButtonClasses} onClick={()=>{removeFromTempInstructionList?.(props.step)}}>X</button>
    </div>
  );
};