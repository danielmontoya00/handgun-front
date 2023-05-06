import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Cita } from './cita.model';

export const retrieveCitas = createAction('[Cita/API] Retrieve Citas');
export const createCita = createAction(
  '[Cita/API] Create Cita',
  props<{
    cliente: string,
    direccion: {
      calle: string,
      cp: string,
      numeroInt: string,
      numeroExt: string,
      colonia: string,
      ciudad: string,
      estado: string
    },
    tipoTrabajo: string,
    fecha: Date,
    comentarios: string,
    operador: string,
    estatus: string
  }>()
);
export const createCitaSuccess = createAction('[Cita/API] Create Cita Success');

export const modifyCita = createAction(
  '[Cita/API] Modificar Cita',
  props<{
    id: string,
    cliente: string,
    direccion: {
      calle: string,
      cp: string,
      numeroInt: string,
      numeroExt: string,
      colonia: string,
      ciudad: string,
      estado: string
    },
    tipoTrabajo: string,
    fecha: Date,
    comentarios: string,
    operador: string,
    estatus: string
  }>()
);
export const modifyCitaSuccess = createAction('[Cita/API] Modificar Cita Success');

export const removeCita = createAction('[Cita/API] Eliminar Cita',
props<{
  id: string
}>())
export const removeCitaSuccess = createAction('[Cita/API] Eliminar Citas Sucess');

export const loadCitas = createAction(
  '[Cita/API] Load Citas', 
  props<{ citas: Cita[] }>()
);

export const addCita = createAction(
  '[Cita/API] Add Cita',
  props<{ cita: Cita }>()
);

export const upsertCita = createAction(
  '[Cita/API] Upsert Cita',
  props<{ cita: Cita }>()
);

export const addCitas = createAction(
  '[Cita/API] Add Citas',
  props<{ citas: Cita[] }>()
);

export const upsertCitas = createAction(
  '[Cita/API] Upsert Citas',
  props<{ citas: Cita[] }>()
);

export const updateCita = createAction(
  '[Cita/API] Update Cita',
  props<{ cita: Update<Cita> }>()
);

export const updateCitas = createAction(
  '[Cita/API] Update Citas',
  props<{ citas: Update<Cita>[] }>()
);

export const deleteCita = createAction(
  '[Cita/API] Delete Cita',
  props<{ id: string }>()
);

export const deleteCitas = createAction(
  '[Cita/API] Delete Citas',
  props<{ ids: string[] }>()
);

export const clearCitas = createAction(
  '[Cita/API] Clear Citas'
);
