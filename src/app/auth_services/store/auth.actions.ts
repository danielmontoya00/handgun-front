import { createAction, props } from '@ngrx/store';
import { Media, User } from '../model/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{
    email: string;
    password: string;
  }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{
    jwt: string;
    // usuario: User
  }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{
    error: any;
  }>()
);

export const registrar = createAction(
  '[Auth] Registrar',
  props<{
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>()
);

export const registrarSuccess = createAction(
  '[Auth] Registrar Success',
  props<{
    jwt: string;
    usuario: User;
  }>()
);

export const registrarFailure = createAction(
  '[Auth] Registrar Failure',
  props<{
    error: any;
  }>()
);

export const cerrarSesion = createAction(
  '[Auth] Cerrar Sesion',
);

export const llenarSesion = createAction(
  '[Auth] Llenar Sesion',
  props<{
    usuario: User;
  }>()
);

export const actualizarUser = createAction(
  '[Auth] Actualizar User',
  props<{ usuario: User, imagen: FileList }>()
);

export const actualizarUserSuccess = createAction(
  '[Auth] Actualizar User Success',
  props<{ usuario: User }>()
);

export const actualizarUserFailure = createAction(
  '[Auth] Actualizar User Failure',
  props<{ error: any }>()
);

export const getMe = createAction(
  '[App] Get Me',
);

export const getMeSuccess = createAction(
  '[App] Get Me Success',
  props<{ usuario: User }>()
);

export const getMeFailure = createAction(
  '[App] Get Me Failure',
  props<{ error: any }>()
);

export const getRecoveryToken = createAction(
  '[App] Get Recovery Token',
  props<{ email: string }>()
);

export const getRecoveryTokenSuccess = createAction(
  '[App] Get Recovery Token Success',
  props<{ payload: string }>()
);

export const getRecoveryTokenFailure = createAction(
  '[App] Get Recovery Token Failure', props<{ error: any }>()
);

export const passwordRecovery = createAction(
  '[App] Password Recovery',
  props<{ code: string, password: string, passwordConfirmation: string }>()
);

export const passwordRecoverySuccess = createAction(
  '[App] Password Recovery Success',
  props<{ payload: string }>()// revisar si payload contin token
);

export const passwordRecoveryFailure = createAction(
  '[App] Password Recovery Failure',
  props<{ error: any }>()
);

