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

export interface IInstructionStep {
  step: string;
}

export interface IRecipe {
  name: string;
  ingredients: IIngredient[];
  instructions: IInstructionStep[];
}

export interface IAppState {
  myCounter: number;
  addToCounter?: ()=>void;
  tempIngredientList: IIngredient[];
  addToTempIngredientList?: (ingredient: IIngredient)=>void;
  removeFromTempIngredientList?: (name: string)=>void;
  clearTempIngredientList?: ()=>void;
  tempInstructionList: IInstructionStep[];
  addToTempInstructionList?: (step: IInstructionStep)=>void;
  removeFromTempInstructionList?: (step: string)=>void;
  clearTempInstructionList?: ()=>void;
}
