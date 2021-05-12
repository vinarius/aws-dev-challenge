import React, {createContext, useReducer, PropsWithChildren, FC, ReactNode} from 'react';

import {reducer} from './reducer';
import {IAppState} from '../../models/interfaces';
import { STATE_ACTIONS } from '../../models/enums';

const initialState: IAppState = {
  myCounter: 0
};

export const Context = createContext<IAppState>(initialState);

export const ContextProvider: FC<ReactNode> = (props: PropsWithChildren<any>) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCounter = () => {
    console.log('add to counter is being called')
    dispatch({type: STATE_ACTIONS.addToCounter});
  };

  return (
    <Context.Provider value={{
      ...state,
      addToCounter
    }}>
      {props.children}
    </Context.Provider>
  );
};