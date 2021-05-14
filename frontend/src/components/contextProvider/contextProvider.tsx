import React, {createContext, useReducer, PropsWithChildren, FC, ReactNode} from 'react';

import {reducer} from './reducer';
import {IAppState, IIngredient, IInstructionStep} from '../../models/interfaces';
import { STATE_ACTION } from '../../models/enums';

const initialState: IAppState = {
  myCounter: 0,
  tempIngredientList: [
    {
      name: 'brown sugar',
      measurementType: 'cup',
      amount: 1
    }
  ],
  tempInstructionList: [
    {
      step: 'Preheat oven'
    },
    {
      step: 'Add sugar'
    }
  ]
};

export const Context = createContext<IAppState>(initialState);

export const ContextProvider: FC<ReactNode> = (props: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCounter = () => {
    dispatch({type: STATE_ACTION.addToCounter});
  };

  const addToTempIngredientList = (ingredient: IIngredient) => {
    dispatch({
      type: STATE_ACTION.addToTempIngredientList,
      payload: ingredient
    })
  };

  const removeFromTempIngredientList = (name: string) => {
    dispatch({
      type: STATE_ACTION.removeFromTempIngredientList,
      payload: name
    })
  };

  const clearTempIngredientList = () => {
    dispatch({
      type: STATE_ACTION.clearTempIngredientList
    });
  };

  const addToTempInstructionList = (step: IInstructionStep) => {
    dispatch({
      type: STATE_ACTION.addToTempInstructionList,
      payload: step
    });
  };

  const removeFromTempInstructionList = (step: string) => {
    dispatch({
      type: STATE_ACTION.removeFromTempInstructionList,
      payload: step
    });
  };

  const clearTempInstructionList = () => {
    dispatch({
      type: STATE_ACTION.clearTempInstructionList
    });
  };

  return (
    <Context.Provider value={{
      ...state,
      addToCounter,
      addToTempIngredientList,
      removeFromTempIngredientList,
      clearTempIngredientList,
      addToTempInstructionList,
      removeFromTempInstructionList,
      clearTempInstructionList
    }}>
      {props.children}
    </Context.Provider>
  );
};