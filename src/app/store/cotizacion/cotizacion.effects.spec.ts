import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CotizacionEffects } from './cotizacion.effects';

describe('CotizacionEffects', () => {
  let actions$: Observable<any>;
  let effects: CotizacionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CotizacionEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CotizacionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
