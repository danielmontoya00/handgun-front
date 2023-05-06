import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cotizacion } from './cotizacion.model';
import * as CotizacionActions from './cotizacion.actions';

export const cotizacionsFeatureKey = 'cotizacions';

export interface State extends EntityState<Cotizacion> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Cotizacion> = createEntityAdapter<Cotizacion>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(CotizacionActions.addCotizacion,
    (state, action) => adapter.addOne(action.cotizacion, state)
  ),
  on(CotizacionActions.upsertCotizacion,
    (state, action) => adapter.upsertOne(action.cotizacion, state)
  ),
  on(CotizacionActions.addCotizacions,
    (state, action) => adapter.addMany(action.cotizacions, state)
  ),
  on(CotizacionActions.upsertCotizacions,
    (state, action) => adapter.upsertMany(action.cotizacions, state)
  ),
  on(CotizacionActions.updateCotizacion,
    (state, action) => adapter.updateOne(action.cotizacion, state)
  ),
  on(CotizacionActions.updateCotizacions,
    (state, action) => adapter.updateMany(action.cotizacions, state)
  ),
  on(CotizacionActions.deleteCotizacion,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CotizacionActions.deleteCotizacions,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(CotizacionActions.loadCotizacions,
    (state, action) => adapter.setAll(action.cotizacions, state)
  ),
  on(CotizacionActions.clearCotizacions,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
