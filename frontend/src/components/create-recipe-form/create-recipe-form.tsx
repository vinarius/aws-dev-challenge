import React, {ChangeEvent, useState, useContext} from 'react';

import './create-recipe-form.css';

import {measurements} from '../../models/enums';
import {Context} from '../contextProvider/contextProvider';
import {AddedIngredient} from './added-ingredient/added-ingredient';

export const CreateRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [measurementType, setMeasurementType] = useState('');
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
    setMeasurementType('');
    setIngredientAmount(0);
  };

  const handleRecipeNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRecipeName(event.target.value);
  };

  const handleMeasurementTypeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setMeasurementType(event.target.value);
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
          <div id="ingredient-row">
            <div className="display-column">
              <label htmlFor="measurement-list">Measurement Type:</label>
              <select name="measurement-list" className="form-dropdown" onChange={handleMeasurementTypeChange} required>
                <option value={measurements.CUP}>{measurements.CUP}</option>
                <option value={measurements.TABLESPOON}>{measurements.TABLESPOON}</option>
                <option value={measurements.TEASPOON}>{measurements.TEASPOON}</option>
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
          {tempIngredientList?.map(el => {
            return <AddedIngredient
              {...el}
            />
          })}
        </div>
      </div>
    </div>
  );
};