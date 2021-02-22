import {Action, createAction, props} from '@ngrx/store';


export enum SimpleActionTypes {
  UnavailablePrice = 'una',
  ComputePrice = 'comp',
  ComputePriceSuccess = 'comp succ'
}


export class UnavailablePrice implements Action {
  readonly type = SimpleActionTypes.UnavailablePrice;

}
export class ComputePrice implements Action {
  readonly type = SimpleActionTypes.ComputePrice;
}
export class ComputePriceSuccess implements Action {
  readonly type = SimpleActionTypes.ComputePriceSuccess;
  constructor(public data: any) {}
}

export type SimpleAction =
  UnavailablePrice |
  ComputePrice |
  ComputePriceSuccess;

