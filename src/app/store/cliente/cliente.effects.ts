import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs';
import { ClienteService } from './cliente.service';
import * as ClientesActions from 'src/app/store/cliente/cliente.actions';
import { Cliente } from './cliente.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';



@Injectable()
export class ClienteEffects {


  constructor(
    private actions$: Actions,
    private clienteService: ClienteService,
    private readonly store: Store<AppState>,
    private router: Router
    ) {}

  retrieveClientes$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ClientesActions.retrieveClientes),
        switchMap(() =>
          this.clienteService.getClientes().pipe(
            map(data => ClientesActions.loadClientes({ clientes: (data as unknown as Cliente[]) })),
            // catchError(error => of(CitasActions.getCitasFailure({ error }))))
            )
          ),
    );
  });

  createCliente$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ClientesActions.createCliente),
        switchMap((data) =>
          this.clienteService.createCliente(
            data.nombre,
            data.apellidoPaterno,
            data.apellidoMaterno,
            data.telefonoFijo,
            data.telefonoMovil,
            data.email,
            data.rfc,
            data.razonSocial
          ).pipe(
            map(data => ClientesActions.createClienteSuccess()),
            tap(data => {
              this.store.dispatch(ClientesActions.retrieveClientes());
              this.router.navigate(['/admin', 'clientes', 'list']);
            })
            // catchError(error => of(ClientesActions.createClienteFailure({ error }))))
          ),
        )
    );
  });

  modificarClienet$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ClientesActions.modifyCliente),
        switchMap((data) =>
          this.clienteService.modificarCliente(
            data.id,
            data.nombre,
            data.apellidoPaterno,
            data.apellidoMaterno,
            data.telefonoFijo,
            data.telefonoMovil,
            data.email,
            data.rfc,
            data.razonSocial
            ).pipe(
            map(data => ClientesActions.modifyClienteSuccess()),
            tap(data => {
              this.store.dispatch(ClientesActions.retrieveClientes());
              this.router.navigate(['/admin', 'clientes', 'list']);
            })
            // catchError(error => of(ClientesActions.modifyClienteFailure({ error }))))
          ),
        )
    );
  });

  removeCliente$ = createEffect(() => {
    return this.actions$.pipe(
        ofType(ClientesActions.removeCliente),
        switchMap((data) =>
          this.clienteService.eliminarCliente(data.id).pipe(
            map(data => ClientesActions.removeClienteSuccess()),
            tap(data => {
              this.store.dispatch(ClientesActions.retrieveClientes());
            })
            // catchError(error => of(ClientesActions.removeClienteFailure({ error }))))
          )
          ),
    );
  });
}
