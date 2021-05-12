import {MouseEvent} from 'react';

import {STATE_ACTIONS} from './enums';
export interface IAction {
  type: STATE_ACTIONS,
  payload?: any;
};

export interface IIngredient {
  name: string;
  measurementType: string;
  amount: number;
}
export interface IAppState {
  myCounter: number;
  addToCounter?: ()=>void;
  tempIngredientList: IIngredient[];
  addToTempIngredientList?: (ingredient: IIngredient)=>void;
  removeFromTempIngredientList?: (event: MouseEvent)=>void;
}
