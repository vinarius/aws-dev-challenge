import { STATE_ACTIONS } from '../../models/enums';
import {IAppState, IAction} from '../../models/interfaces';

export const reducer = (state: IAppState, action: IAction) => {
  switch(action.type) {
    case STATE_ACTIONS.addToCounter:
      console.log('reaching the reducer function call')
      return addToCounter(state);
    default:
      return state;
  }
};

const addToCounter = (state: IAppState) => ({
    ...state,
    myCounter: state.myCounter + 1
} as IAppState);