import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cita } from './cita.model';
import * as CitaActions from './cita.actions';

export const citasFeatureKey = 'citas';

export interface State extends EntityState<Cita> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Cita> = createEntityAdapter<Cita>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(CitaActions.addCita,
    (state, action) => adapter.addOne(action.cita, state)
  ),
  on(CitaActions.upsertCita,
    (state, action) => adapter.upsertOne(action.cita, state)
  ),
  on(CitaActions.addCitas,
    (state, action) => adapter.addMany(action.citas, state)
  ),
  on(CitaActions.upsertCitas,
    (state, action) => adapter.upsertMany(action.citas, state)
  ),
  on(CitaActions.updateCita,
    (state, action) => adapter.updateOne(action.cita, state)
  ),
  on(CitaActions.updateCitas,
    (state, action) => adapter.updateMany(action.citas, state)
  ),
  on(CitaActions.deleteCita,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(CitaActions.deleteCitas,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(CitaActions.loadCitas,
    (state, action) => adapter.setAll(action.citas, state)
  ),
  on(CitaActions.clearCitas,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
