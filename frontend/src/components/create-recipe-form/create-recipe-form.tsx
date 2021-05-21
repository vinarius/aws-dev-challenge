import React, {ChangeEvent, useState, useContext} from 'react';

import './create-recipe-form.css';

import {MEASUREMENT} from '../../models/enums';
import {Context} from '../contextProvider/contextProvider';
import {AddedIngredient} from './added-ingredient/added-ingredient';
import {AddedInstruction} from './added-instruction/added-instruction';

import mapEnums from '../../utilities/mapEnums';
import { IRecipe } from '../../models/interfaces';

export const CreateRecipeForm = () => {
  const defaultMeasurementType = MEASUREMENT.CUP;
  const [inputRecipeName, setInputRecipeName] = useState('');
  const [tempRecipeName, setTempRecipeName] = useState('');
  const [measurementType, setMeasurementType] = useState(defaultMeasurementType);
  const [ingredientAmount, setIngredientAmount] = useState(0);
  const [ingredientName, setIngredientName] = useState('');
  const [instructionStep, setInstructionStep] = useState('');

  const {
    tempIngredientList,
    tempInstructionList,
    addToTempIngredientList,
    addToTempInstructionList,
    clearTempIngredientList,
    clearTempInstructionList
  } = useContext(Context);

  const handleinputRecipeNameFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    setTempRecipeName(inputRecipeName);

    setInputRecipeName('');
    event.target.reset();
  };

  const handleIngredientFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newIngredient = {
      name: ingredientName,
      amount: ingredientAmount,
      measurementType
    };

    addToTempIngredientList?.(newIngredient);

    event.target.reset();
    setIngredientAmount(0);
  };

  const handleinputRecipeNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputRecipeName(event.target.value);
  };

  const handleMeasurementTypeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setMeasurementType(event.target.value as MEASUREMENT);
  };

  const handleIngredientAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIngredientAmount(parseFloat(event.target.value));
  };

  const handleIngredientNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIngredientName(event.target.value);
  };

  const handleInstructionFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addToTempInstructionList?.({
      step: instructionStep
    });
    setInstructionStep('');
    event.target.reset();
  };

  const handleInstructionChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInstructionStep(event.target.value);
  };

  const handleCreateRecipe = (): void => {
    const newRecipe: IRecipe = {
      name: tempRecipeName,
      ingredients: [...tempIngredientList],
      instructions: [...tempInstructionList]
    };

    console.log('newRecipe:', newRecipe);

    // TODO: fire post request to create api


    clearTempIngredientList?.();
    clearTempInstructionList?.();
    setInputRecipeName('');
    setTempRecipeName('');
  };

  return (
    <div id="forms-container">
      <h1 className="center-title">Create a new recipe</h1>
      <div className="space"></div>

      <div className="display-row">
        <form className="form-container" onSubmit={handleinputRecipeNameFormSubmit}>
          <h2>Recipe Title</h2>
          <input type="text" className="text-input" autoComplete="off" name="inputRecipeName" onChange={handleinputRecipeNameChange} required />

          <div className="space"></div>

          <button className="form-button" type="submit">Add Name</button>
        </form>

        <div className="added-temp-container">
          <p className="temp-title">Recipe name:</p>
          <p>{tempRecipeName}</p>
        </div>
      </div>
      

      <div className="display-row">
        <form className="form-container" onSubmit={handleIngredientFormSubmit}>
          <h2>Add an ingredient</h2>

          <div className="space"></div>

          <div id="ingredient-row">
            <div className="display-column">
              <label htmlFor="ingredient-amount">Enter an amount:</label>
              <input name="ingredient-amount" type="number" onChange={handleIngredientAmountChange} required />
            </div>
            <div className="display-column">
              <label htmlFor="measurement-list">Measurement Type:</label>
              <select name="measurement-list" defaultValue={defaultMeasurementType} className="form-dropdown" onChange={handleMeasurementTypeChange} required>
                {mapEnums(MEASUREMENT, (type: string, index: number) => {
                  return <option value={type} key={index.toString()}>{type}</option>
                })}
              </select>
            </div>
          </div>

          <div className="space"></div>

          <label htmlFor="ingredientName">Ingredient:</label>
          <input type="text" autoComplete="off" className="text-input" name="ingredientName" onChange={handleIngredientNameChange} />

          <div className="space"></div>

          <button className="form-button" type="submit">Add Ingredient</button>
        </form>
        <div className="added-temp-container">
          <p className="temp-title">Ingredients:</p>
          {tempIngredientList?.map((el, index) => {
            return <AddedIngredient
              key={index.toString()}
              elementKey={index}
              {...el}
            />
          })}
        </div>
      </div>

      <div className="display-row">
        <form className="form-container" onSubmit={handleInstructionFormSubmit}>
            <h2>Add to recipe instructions:</h2>

            <div className="space"></div>

            <label htmlFor="instructionStep">Instruction Step:</label>
            <input type="text" autoComplete="off" className="text-input" name="instructionStep" onChange={handleInstructionChange} />

            <div className="space"></div>

            <button className="form-button" type="submit">Add Step</button>
        </form>
        <div className="added-temp-container">
          <p className="temp-title">Instructions:</p>
          {tempInstructionList?.map((el, index) => {
            return <AddedInstruction
              key={index.toString()}
              elementKey={index}
              {...el}
            />
          })}
        </div>
      </div>

      <div className="space"></div>

      <button style={{width: '200px'}} onClick={()=>{handleCreateRecipe()}}>Sweet submit button</button>
    </div>
  );
};