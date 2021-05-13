import React, {ChangeEvent, useState, useContext} from 'react';

import './create-recipe-form.css';

import {MEASUREMENT} from '../../models/enums';
import {Context} from '../contextProvider/contextProvider';
import {AddedIngredient} from './added-ingredient/added-ingredient';
import mapEnums from '../../utilities/mapEnums';

export const CreateRecipeForm = () => {
  const defaultMeasurementType = MEASUREMENT.CUP;
  const [recipeName, setRecipeName] = useState('');
  const [measurementType, setMeasurementType] = useState(defaultMeasurementType);
  const [ingredientAmount, setIngredientAmount] = useState(0);
  const [ingredientName, setIngredientName] = useState('');

  const {
    tempIngredientList,
    addToTempIngredientList
  } = useContext(Context);

  const handleFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
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

  const handleRecipeNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRecipeName(event.target.value);
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

  return (
    <div id="forms-container">
      <p>Create a new recipe</p>
      <div className="space"></div>
      <p>Recipe Title</p>
      <input type="text" className="text-input" name="recipeName" onChange={handleRecipeNameChange} required />

      <div className="display-row">
        <form className="ingredient-form-container" onSubmit={handleFormSubmit}>
          <h2>Add an ingredient</h2>
          <div id="ingredient-row">
            <div className="display-column">
              <label htmlFor="measurement-list">Measurement Type:</label>
              <select name="measurement-list" defaultValue={defaultMeasurementType} className="form-dropdown" onChange={handleMeasurementTypeChange} required>
                {mapEnums(MEASUREMENT, (type: string, index: number) => {
                  return <option value={type} key={index}>{type}</option>
                })}
              </select>
            </div>
            <div className="display-column">
              <label htmlFor="ingredient-amount">Enter an amount:</label>
              <input name="ingredient-amount" type="number" onChange={handleIngredientAmountChange} required />
            </div>
          </div>

          <div className="space"></div>

          <label htmlFor="ingredientName">Ingredient:</label>
          <input type="text" className="text-input" name="ingredientName" onChange={handleIngredientNameChange} />

          <div className="space"></div>

          <button className="form-button" type="submit">Add Ingredient</button>
        </form>
        <div className="added-ingredients-container">
          <p>Ingredients:</p>
          {tempIngredientList?.map((el, index) => {
            return <AddedIngredient
              elementKey={index}
              {...el}
            />
          })}
        </div>
      </div>

      <div>
        My instruction section will go here
      </div>

      <button style={{width: '250px'}}>Sweet submit button</button>
    </div>
  );
};