import React, {ChangeEvent, useState} from 'react';

export const CreateRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');

  const handleFormSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // fire post request with data to.... my api to create a recipe

    // if successful then
    event.target.reset()
    setRecipeName('')
  };

  const handleRecipeNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setRecipeName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <p>Create a new recipe</p>
        <input type="text" name="recipeName" onChange={handleRecipeNameChange} />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <p>My recipe name: {recipeName}</p>
    </div>
  );
};