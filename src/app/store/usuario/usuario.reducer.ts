import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Usuario } from './usuario.model';
import * as UsuarioActions from './usuario.actions';

export const usuariosFeatureKey = 'usuarios';

export interface State extends EntityState<Usuario> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Usuario> = createEntityAdapter<Usuario>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(UsuarioActions.addUsuario,
    (state, action) => adapter.addOne(action.usuario, state)
  ),
  on(UsuarioActions.upsertUsuario,
    (state, action) => adapter.upsertOne(action.usuario, state)
  ),
  on(UsuarioActions.addUsuarios,
    (state, action) => adapter.addMany(action.usuarios, state)
  ),
  on(UsuarioActions.upsertUsuarios,
    (state, action) => adapter.upsertMany(action.usuarios, state)
  ),
  on(UsuarioActions.updateUsuario,
    (state, action) => adapter.updateOne(action.usuario, state)
  ),
  on(UsuarioActions.updateUsuarios,
    (state, action) => adapter.updateMany(action.usuarios, state)
  ),
  on(UsuarioActions.deleteUsuario,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UsuarioActions.deleteUsuarios,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UsuarioActions.loadUsuarios,
    (state, action) => adapter.setAll(action.usuarios, state)
  ),
  on(UsuarioActions.clearUsuarios,
    state => adapter.removeAll(state)
  ),
);

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
