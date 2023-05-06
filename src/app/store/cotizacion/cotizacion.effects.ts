import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CotizacionService } from './cotizacion.service';
import * as CotizacionActions from 'src/app/store/cotizacion/cotizacion.actions';
import { map, switchMap, tap } from 'rxjs';
import { Cotizacion } from './cotizacion.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';



@Injectable()
export class CotizacionEffects {


  constructor(
    private actions$: Actions,
    private cotizacionService: CotizacionService,
    private readonly store: Store<AppState>,
    private router: Router
    ) {}

  retrieveCotizaciones$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CotizacionActions.retrieveCotizacions),
        switchMap(() =>
          this.cotizacionService.getCotizaciones().pipe(
            map(data => CotizacionActions.loadCotizacions({ cotizacions: (data as unknown as Cotizacion[]) })),
            // catchError(error => of(CitasActions.getCitasFailure({ error }))))
            )
          ),
    );
  });

  createCotizacion$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CotizacionActions.createCotizacion),
        switchMap((data) =>
          this.cotizacionService.createCotizacion(data.cliente, data.direccion).pipe(
            map(data => CotizacionActions.createCotizacionSuccess()),
            tap(data => {
              this.store.dispatch(CotizacionActions.retrieveCotizacions());
              this.router.navigate(['/admin', 'cotizaciones', 'list']);
            })
            // catchError(error => of(CotizacionActions.createCotizacionFailure({ error }))))
          ),
        )
    );
  });


  modifyCotizacion$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CotizacionActions.modifyCotizacion),
        switchMap((data) =>
          this.cotizacionService.modificarCotizacion(data.id, data.cliente, data.direccion).pipe(
            map(data => CotizacionActions.modifyCotizacionSuccess()),
            tap(data => {
              this.store.dispatch(CotizacionActions.retrieveCotizacions());
              this.router.navigate(['/admin', 'cotizaciones', 'list']);
            })
            // catchError(error => of(CotizacionActions.createCotizacionFailure({ error }))))
          ),
        )
    );
  });

  removeCotizacion$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CotizacionActions.removeCotizacion),
        switchMap((data) =>
          this.cotizacionService.eliminarCotizacion(data.id).pipe(
            map(data => CotizacionActions.removeCotizacionSuccess()),
            tap(data => {
              this.store.dispatch(CotizacionActions.retrieveCotizacions());
            })
            // catchError(error => of(CotizacionActions.removeCotizacionFailure({ error }))))
          )
          ),
    );
  });
}
