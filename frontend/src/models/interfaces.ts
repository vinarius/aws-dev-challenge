import {MouseEvent} from 'react';

import {STATE_ACTION} from './enums';
export interface IAction {
  type: STATE_ACTION,
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
  removeFromTempIngredientList?: (name: string)=>void;
}
