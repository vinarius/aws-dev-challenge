import React from 'react';

import './App.css';

import {CreateRecipeForm} from './components/create-recipe-form/create-recipe-form';
import {ContextProvider} from './components/contextProvider/contextProvider';
import { MyTempComponent } from './components/my-temp-component';

function App() {



  return (
    <ContextProvider>
      <div className="App">
        <CreateRecipeForm />
        <MyTempComponent />
      </div>
    </ContextProvider>
  );
}

export default App;
