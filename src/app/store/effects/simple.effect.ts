import {Actions, createEffect, ofType} from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SimpleActionTypes } from '../actions/simple.action';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../reducers/simple.reducer';


@Injectable()
export class SimpleEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>
  ) {}

  getPriceAfterLocalCartUpdate: any = createEffect((): any => {
    return this.actions$.pipe(
      ofType(SimpleActionTypes.UnavailablePrice),
      switchMap(() => (SimpleActionTypes.ComputePrice))
  );
  });
}
