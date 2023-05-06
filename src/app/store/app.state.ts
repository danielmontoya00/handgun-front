import * as fromRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AuthJSStrapi } from '../auth_services/auth';
import { CitaEffects } from './cita/cita.effects';
import * as citas from './cita/cita.reducer';
import { ClienteEffects } from './cliente/cliente.effects';
import * as clientes from './cliente/cliente.reducer';
import { CotizacionEffects } from './cotizacion/cotizacion.effects';
import * as cotizaciones from './cotizacion/cotizacion.reducer';
import { UsuarioEffects } from './usuario/usuario.effects';
import * as usuarios from './usuario/usuario.reducer';

export interface AppState {
  citas: citas.State;
  clientes: clientes.State;
  cotizaciones: cotizaciones.State;
  usuarios: usuarios.State;
  router: fromRouter.RouterReducerState;
  ['auth']: AuthJSStrapi;
}

export const reducers: ActionReducerMap<AppState> = {
  citas: citas.reducer,
  clientes: clientes.reducer,
  cotizaciones: cotizaciones.reducer,
  usuarios: usuarios.reducer,
  router: fromRouter.routerReducer,
  auth: AuthJSStrapi.AuthReducer,
};

export const EFFECTS = [
  AuthJSStrapi.AuthEffect,
  CitaEffects,
  ClienteEffects,
  CotizacionEffects,
  UsuarioEffects
];
