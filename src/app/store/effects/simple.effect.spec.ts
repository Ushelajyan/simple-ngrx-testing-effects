import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  SimpleActionTypes,
} from '../actions/simple.action';
import {SimpleEffects} from './simple.effect';
import {MockStore, provideMockStore} from '@ngrx/store/testing';
import {Store} from '@ngrx/store';

describe('SimpleEffects', () => {
  let actions$: any;
  let effects: SimpleEffects;
  let store: MockStore<Store>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleEffects,
        provideMockActions(() => actions$),
        provideMockStore() ,
      ],
    });
    store = TestBed.inject(MockStore);
    effects = TestBed.inject(SimpleEffects);
  });
  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
  it('should fire with a default price', (done) => {
    // Mock the action that we use to activate the effect
    actions$ = of(SimpleActionTypes.UnavailablePrice);
    // Subscribe to the effect
    effects.getPriceAfterLocalCartUpdate.subscribe((res) => {
      // the expected results verification
      expect(res).toEqual(SimpleActionTypes.ComputePrice);
      // And all done !
      done();
    });
  });
});
