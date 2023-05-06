import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ClienteEffects } from './cliente.effects';

describe('ClienteEffects', () => {
  let actions$: Observable<any>;
  let effects: ClienteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClienteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ClienteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
