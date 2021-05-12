import { STATE_ACTIONS } from '../../models/enums';
import {IAppState, IAction, IIngredient} from '../../models/interfaces';

export const reducer = (state: IAppState, action: IAction) => {
  switch(action.type) {
    case STATE_ACTIONS.addToCounter:
      return addToCounter(state);
    case STATE_ACTIONS.addToTempIngredientList:
      return addToTempIngredientList(state, action.payload);
    case STATE_ACTIONS.removeFromTempIngredientList:
      return removeFromTempIngredientList(state, action.payload);
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