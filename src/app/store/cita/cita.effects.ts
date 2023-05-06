import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CitaService } from './cita.service';
import * as CitasActions from './cita.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Cita } from './cita.model';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Router } from '@angular/router';


@Injectable()
export class CitaEffects {


  constructor(
    private actions$: Actions,
    private citaService: CitaService,
    private readonly store: Store<AppState>,
    private router: Router
    ) {}

  retrieveCitas$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CitasActions.retrieveCitas),
        switchMap(() =>
          this.citaService.getCitas().pipe(
            map(data => CitasActions.loadCitas({ citas: (data as unknown as Cita[]) })),
            // catchError(error => of(CitasActions.getCitasFailure({ error }))))
            )
          ),
    );
  });


  createCita$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CitasActions.createCita),
        switchMap((data) =>
          this.citaService.createCita(
            data.cliente,
            data.direccion,
            data.tipoTrabajo,
            data.fecha,
            data.comentarios,
            data.operador,
            data.estatus
          ).pipe(
            map(data => CitasActions.createCitaSuccess()),
            tap(data => {
              this.store.dispatch(CitasActions.retrieveCitas());
              this.router.navigate(['/admin', 'citas', 'list']);
            })
            // catchError(error => of(CitasActions.createCitaFailure({ error }))))
          
          )
        ),
    );
  });

  modifyCita$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CitasActions.modifyCita),
        switchMap((data) =>
          this.citaService.modificarCita(
            data.id,
            data.cliente,
            data.direccion,
            data.tipoTrabajo,
            data.fecha,
            data.comentarios,
            data.operador,
            data.estatus
          ).pipe(
            map(data => CitasActions.modifyCitaSuccess()),
            tap(data => {
              this.store.dispatch(CitasActions.retrieveCitas());
              this.router.navigate(['/admin', 'citas', 'list']);
            })
            // catchError(error => of(CitasActions.createCitaFailure({ error }))))
          
          )
        ),
    );
  });

  eliminarCita$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(CitasActions.removeCita),
        switchMap((data) =>
          this.citaService.eliminarCita(data.id).pipe(
            map(data => CitasActions.removeCitaSuccess()),
            tap(data => {
              this.store.dispatch(CitasActions.retrieveCitas());
            })
            // catchError(error => of(CitasActions.removeCitaFailure({ error }))))
          )
          ),
    );
  });
}
