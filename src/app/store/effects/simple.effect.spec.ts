import {TestBed} from '@angular/core/testing';
import {of} from 'rxjs';
import {provideMockActions} from '@ngrx/effects/testing';
import {
  SimpleActionTypes, UnavailablePrice,
} from '../actions/simple.action';
import {SimpleEffects} from './simple.effect';
import {MockStore, provideMockStore} from '@ngrx/store/testing';

describe('SimpleEffects', () => {
  let store;

  const createEffects = (actions$) => {
    TestBed.configureTestingModule({
      providers: [
        SimpleEffects,
        provideMockActions(() => actions$),
        provideMockStore(),
      ],
    });
    store = TestBed.inject(MockStore);
    return TestBed.inject(SimpleEffects);
  };
  it('should be created', () => {
    const effects = createEffects(of(undefined));

    expect(effects).toBeTruthy();
  });

  it('should fire with a default price', (done) => {
    // Mock the action that we use to activate the effect
    const actions$ = of( new UnavailablePrice());
    // Create the effect with your given mock
    const effects = createEffects(actions$);
    // the expected results verification
    effects.getPriceAfterLocalCartUpdate.subscribe((res) => {
      // the expected results verification
      expect(res.type).toEqual(SimpleActionTypes.ComputePrice);
      // And all done !
      done();
    });
  });
});
