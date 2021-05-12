import React, {ChangeEvent, useState} from 'react';

import './create-recipe-form.css';

import {measurements} from '../../models/measurements';

export const CreateRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredientType, setIngredientType] = useState('');
  const [ingredientAmount, setIngredientAmount] = useState(0);

  const handleFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // TODO: bring in axios when ready to fire post request with data

    // if successful then
    event.target.reset();
    setRecipeName('');
    setIngredientType('');
    setIngredientAmount(0);
  };

  const handleRecipeNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRecipeName(event.target.value);
  };

  const handleIngredientTypeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setIngredientType(event.target.value);
  };

  const handleIngredientAmountChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIngredientAmount(parseFloat(event.target.value));
  };

  return (
    <div id="create-recipe-form-container">
      <form id="create-recipe-form" onSubmit={handleFormSubmit}>
        <p>Create a new recipe</p>
        <input type="text" name="recipeName" onChange={handleRecipeNameChange} required />

        <div className="space"></div>

        <div id="ingredient-row">
          <div>
            <label htmlFor="ingredient-list">Select an ingredient:</label>
            <select className="form-dropdown" onChange={handleIngredientTypeChange}>
              <option value={measurements.CUP}>{measurements.CUP}</option>
              <option value={measurements.TABLESPOON}>{measurements.TABLESPOON}</option>
              <option value={measurements.TEASPOON}>{measurements.TEASPOON}</option>
            </select>
          </div>
          <div>
            <label htmlFor="ingredient-amount">Enter an amount: </label>
            <input type="number" onChange={handleIngredientAmountChange}></input>
          </div>
        </div>

        <div className="space"></div>

        <div>
          <button className="form-button" type="submit">Submit</button>
          <button className="form-button" type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
};