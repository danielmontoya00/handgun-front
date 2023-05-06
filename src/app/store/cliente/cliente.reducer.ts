import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Cliente } from './cliente.model';
import * as ClienteActions from './cliente.actions';

export const clientesFeatureKey = 'clientes';

export interface State extends EntityState<Cliente> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Cliente> = createEntityAdapter<Cliente>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(ClienteActions.addCliente,
    (state, action) => adapter.addOne(action.cliente, state)
  ),
  on(ClienteActions.upsertCliente,
    (state, action) => adapter.upsertOne(action.cliente, state)
  ),
  on(ClienteActions.addClientes,
    (state, action) => adapter.addMany(action.clientes, state)
  ),
  on(ClienteActions.upsertClientes,
    (state, action) => adapter.upsertMany(action.clientes, state)
  ),
  on(ClienteActions.updateCliente,
    (state, action) => adapter.updateOne(action.cliente, state)
  ),
  on(ClienteActions.updateClientes,
    (state, action) => adapter.updateMany(action.clientes, state)
  ),
  on(ClienteActions.deleteCliente,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(ClienteActions.deleteClientes,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(ClienteActions.loadClientes,
    (state, action) => adapter.setAll(action.clientes, state)
  ),
  on(ClienteActions.clearClientes,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
