import { createAction, props} from '@ngrx/store';

export enum SimpleActionTypes {
  UnavailablePrice = '[App] Unavailable Price',
  ComputePrice = '[App] Price compute',
  ComputePriceSuccess = '[App] Price Success'
}

export const UnavailablePrice = createAction('[App] Unavailable Price');

export const ComputePriceSuccess = createAction('[App] Price Success',
  props<{ data: any }>()
);
export const ComputePrice = createAction('[App] Price compute');

