import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CitaEffects } from './cita.effects';

describe('CitaEffects', () => {
  let actions$: Observable<any>;
  let effects: CitaEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CitaEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CitaEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
