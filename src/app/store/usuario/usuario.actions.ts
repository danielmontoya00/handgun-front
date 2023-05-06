import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Usuario } from './usuario.model';

export const loadUsuarios = createAction(
  '[Usuario/API] Load Usuarios', 
  props<{ usuarios: Usuario[] }>()
);

export const addUsuario = createAction(
  '[Usuario/API] Add Usuario',
  props<{ usuario: Usuario }>()
);

export const upsertUsuario = createAction(
  '[Usuario/API] Upsert Usuario',
  props<{ usuario: Usuario }>()
);

export const addUsuarios = createAction(
  '[Usuario/API] Add Usuarios',
  props<{ usuarios: Usuario[] }>()
);

export const upsertUsuarios = createAction(
  '[Usuario/API] Upsert Usuarios',
  props<{ usuarios: Usuario[] }>()
);

export const updateUsuario = createAction(
  '[Usuario/API] Update Usuario',
  props<{ usuario: Update<Usuario> }>()
);

export const updateUsuarios = createAction(
  '[Usuario/API] Update Usuarios',
  props<{ usuarios: Update<Usuario>[] }>()
);

export const deleteUsuario = createAction(
  '[Usuario/API] Delete Usuario',
  props<{ id: string }>()
);

export const deleteUsuarios = createAction(
  '[Usuario/API] Delete Usuarios',
  props<{ ids: string[] }>()
);

export const clearUsuarios = createAction(
  '[Usuario/API] Clear Usuarios'
);
