import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Cotizacion } from './cotizacion.model';

export const retrieveCotizacions = createAction('[Cotizacion/API] Retrieve Cotizaciones');
export const createCotizacion = createAction(
  '[Cotizacion/API] Create Cotizacion',
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
    }
  }>()
);
export const createCotizacionSuccess = createAction('[Cita/API] Create Cotizacion Success')

export const modifyCotizacion = createAction(
  '[Cotizacion/API] Modificar Cotizacion',
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
    }
  }>()
);
export const modifyCotizacionSuccess = createAction('[Cita/API] Modificar Cotizacion Success')

export const removeCotizacion = createAction('[Cita/API] Eliminar Cotizacion',
props<{
  id: string
}>())
export const removeCotizacionSuccess = createAction('[Cita/API] Eliminar Cotizacion Sucess');


export const loadCotizacions = createAction(
  '[Cotizacion/API] Load Cotizacions', 
  props<{ cotizacions: Cotizacion[] }>()
);

export const addCotizacion = createAction(
  '[Cotizacion/API] Add Cotizacion',
  props<{ cotizacion: Cotizacion }>()
);

export const upsertCotizacion = createAction(
  '[Cotizacion/API] Upsert Cotizacion',
  props<{ cotizacion: Cotizacion }>()
);

export const addCotizacions = createAction(
  '[Cotizacion/API] Add Cotizacions',
  props<{ cotizacions: Cotizacion[] }>()
);

export const upsertCotizacions = createAction(
  '[Cotizacion/API] Upsert Cotizacions',
  props<{ cotizacions: Cotizacion[] }>()
);

export const updateCotizacion = createAction(
  '[Cotizacion/API] Update Cotizacion',
  props<{ cotizacion: Update<Cotizacion> }>()
);

export const updateCotizacions = createAction(
  '[Cotizacion/API] Update Cotizacions',
  props<{ cotizacions: Update<Cotizacion>[] }>()
);

export const deleteCotizacion = createAction(
  '[Cotizacion/API] Delete Cotizacion',
  props<{ id: string }>()
);

export const deleteCotizacions = createAction(
  '[Cotizacion/API] Delete Cotizacions',
  props<{ ids: string[] }>()
);

export const clearCotizacions = createAction(
  '[Cotizacion/API] Clear Cotizacions'
);
