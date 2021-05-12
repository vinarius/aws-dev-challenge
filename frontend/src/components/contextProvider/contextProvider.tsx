import React, {createContext, useReducer, PropsWithChildren, FC, ReactNode} from 'react';

import {reducer} from './reducer';
import {IAppState, IIngredient} from '../../models/interfaces';
import { STATE_ACTIONS } from '../../models/enums';

const initialState: IAppState = {
  myCounter: 0,
  tempIngredientList: [
    {
      'name': 'brown sugar',
      'measurementType': 'cup',
      'amount': 1
    }
  ]
};

export const Context = createContext<IAppState>(initialState);

export const ContextProvider: FC<ReactNode> = (props: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCounter = () => {
    dispatch({type: STATE_ACTIONS.addToCounter});
  };

  const addToTempIngredientList = (ingredient: IIngredient) => {
    dispatch({
      type: STATE_ACTIONS.addToTempIngredientList,
      payload: ingredient
    })
  };

  const removeFromTempIngredientList = (event: MouseEvent) => {
    console.log('event:', event);
    dispatch({
      type: STATE_ACTIONS.removeFromTempIngredientList,
      payload: 'asdf'
    })
  };

  return (
    <Context.Provider value={{
      ...state,
      addToCounter,
      addToTempIngredientList,
      removeFromTempIngredientList
    }}>
      {props.children}
    </Context.Provider>
  );
};