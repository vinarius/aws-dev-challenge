import { STATE_ACTION } from '../../models/enums';
import {IAppState, IAction, IIngredient, IInstructionStep} from '../../models/interfaces';

export const reducer = (state: IAppState, action: IAction) => {
  switch(action.type) {
    case STATE_ACTION.addToCounter:
      return addToCounter(state);
    case STATE_ACTION.addToTempIngredientList:
      return addToTempIngredientList(state, action.payload);
    case STATE_ACTION.removeFromTempIngredientList:
      return removeFromTempIngredientList(state, action.payload);
    case STATE_ACTION.clearTempIngredientList:
      return clearTempIngredientList(state);
    case STATE_ACTION.addToTempInstructionList:
      return addToTempInstructionList(state, action.payload);
    case STATE_ACTION.removeFromTempInstructionList:
      return removeFromTempInstructionList(state, action.payload);
    case STATE_ACTION.clearTempInstructionList:
      return clearTempInstructionList(state);
    default:
      return state;
  }
};

const addToCounter = (state: IAppState) => ({
    ...state,
    myCounter: state.myCounter + 1
} as IAppState);

const addToTempIngredientList = (state: IAppState, payload: IIngredient) => ({
  ...state,
  tempIngredientList: [...state.tempIngredientList, payload]
});

const removeFromTempIngredientList = (state: IAppState, payload: string) => ({
  ...state,
  tempIngredientList: [...state.tempIngredientList].filter(el => el.name !== payload)
});

const clearTempIngredientList = (state: IAppState) => ({
  ...state,
  tempIngredientList: []
});

const addToTempInstructionList = (state: IAppState, payload: IInstructionStep) => ({
  ...state,
  tempInstructionList: [...state.tempInstructionList, payload]
});

const removeFromTempInstructionList = (state: IAppState, payload: string) => ({
  ...state,
  tempInstructionList: [...state.tempInstructionList].filter(el => el.step !== payload)
});

const clearTempInstructionList = (state: IAppState) => ({
  ...state,
  tempInstructionList: []
});