import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from '../reducers/simple.reducer';

export const selectSimpleState = createFeatureSelector<fromApp.AppState>(
  fromApp.simpleKey
);


export const selectSimpleType = createSelector(
  selectSimpleState,
  (state: fromApp.AppState) => (state ? state.simpleType : null)
);
