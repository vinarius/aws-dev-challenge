import {STATE_ACTIONS} from './enums';

export interface IAppState {
  myCounter: number;
  addToCounter?: ()=>void;
}

export interface IAction {
  type: STATE_ACTIONS
};
