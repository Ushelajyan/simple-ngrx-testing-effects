import {Actions, createEffect, ofType} from '@ngrx/effects';
import {flatMap, mergeMap, switchMap, tap} from 'rxjs/operators';
import {ComputePrice, SimpleActionTypes} from '../actions/simple.action';
import {Injectable} from '@angular/core';
import {of} from 'rxjs';


@Injectable()
export class SimpleEffects {
  constructor(
    private actions$: Actions,
  ) {}

  getPriceAfterLocalCartUpdate: any = createEffect((): any => {
    return this.actions$.pipe(
      ofType(SimpleActionTypes.UnavailablePrice),
      switchMap(() => (of(new ComputePrice())))
    );
  });


}
