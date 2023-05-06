import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Cliente } from './cliente.model';

export const retrieveClientes = createAction('[Cliente/API] Retrieve Clientes');
export const createCliente = createAction(
  '[Cliente/API] Create Cliente',
  props<{ 
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    telefonoFijo: string,
    telefonoMovil: string,
    email: string,
    rfc: string,
    razonSocial: string
   }>()
);
export const createClienteSuccess = createAction('[Cliente/API] Create Cliente Success');

export const modifyCliente = createAction(
  '[Cliente/API] Modificar Cliente',
  props<{ 
    id: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    telefonoFijo: string,
    telefonoMovil: string,
    email: string,
    rfc: string,
    razonSocial: string
   }>()
);
export const modifyClienteSuccess = createAction('[Cliente/API] Modificar Cliente Success');

export const removeCliente = createAction('[Cita/API] Eliminar Cliente',
props<{
  id: string
}>())
export const removeClienteSuccess = createAction('[Cita/API] Eliminar Cliente Sucess');

export const loadClientes = createAction(
  '[Cliente/API] Load Clientes', 
  props<{ clientes: Cliente[] }>()
);

export const addCliente = createAction(
  '[Cliente/API] Add Cliente',
  props<{ cliente: Cliente }>()
);

export const upsertCliente = createAction(
  '[Cliente/API] Upsert Cliente',
  props<{ cliente: Cliente }>()
);

export const addClientes = createAction(
  '[Cliente/API] Add Clientes',
  props<{ clientes: Cliente[] }>()
);

export const upsertClientes = createAction(
  '[Cliente/API] Upsert Clientes',
  props<{ clientes: Cliente[] }>()
);

export const updateCliente = createAction(
  '[Cliente/API] Update Cliente',
  props<{ cliente: Update<Cliente> }>()
);

export const updateClientes = createAction(
  '[Cliente/API] Update Clientes',
  props<{ clientes: Update<Cliente>[] }>()
);

export const deleteCliente = createAction(
  '[Cliente/API] Delete Cliente',
  props<{ id: string }>()
);

export const deleteClientes = createAction(
  '[Cliente/API] Delete Clientes',
  props<{ ids: string[] }>()
);

export const clearClientes = createAction(
  '[Cliente/API] Clear Clientes'
);
