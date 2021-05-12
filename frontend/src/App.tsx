import React from 'react';

import './App.css';

import {CreateRecipeForm} from './components/create-recipe-form/create-recipe-form';
import {ContextProvider} from './components/contextProvider/contextProvider';

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <CreateRecipeForm />
      </div>
    </ContextProvider>
  );
}

export default App;
