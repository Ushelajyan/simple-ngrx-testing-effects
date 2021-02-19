import * as AppActions from '../actions/simple.action';
import {createReducer, on} from '@ngrx/store';

export interface AppState {
  simpleType: string;
}
export const simpleKey = 'simple';

export const initialState: AppState = {
  simpleType: null,
};

export const appReducer = createReducer(
  initialState,
    on(AppActions.ComputePriceSuccess, (state) => ({
      ...state,
      simpleType: state.simpleType,
    }))
);
