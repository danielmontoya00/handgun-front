import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';
import { AuthJSStrapi } from '../auth';
import { User } from '../model/user.model';
import { cerrarSesion, getMe, llenarSesion } from './auth.actions';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  auth = false;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
  ) {
    // this.store.select('auth').subscribe((x) => this.auth = x.usuario ? true : false);

  }

  login(correo: string, password: string): Observable<any> {
    correo.toLowerCase();
    const formData = new FormData();
    formData.append('identifier', correo);
    formData.append('password', password);
    return this.http.post(this.getRuta(`api/auth/local`), formData);
  }

  registrar({email, password, lastName, firstName}: { email: string; password: string; lastName: string; firstName: string; }
  ): Observable<any> {
    return this.http.post(this.getRuta(`api/auth/local/register`), {
      email,
      username: email,
      password,
      lastName,
      firstName
    });
  }

  actualizarUser(usuario: User, img: FileList) {
    const formData = new FormData();

    formData.append('data', JSON.stringify({
      ...usuario
    }));

    formData.append('files.media', img[0]);

    return this.http.put<User>(this.getRuta(`users/${this.getId()}`), formData);
  }

  isAuthCheck() {
    const token = localStorage.getItem('token');
    if (!token) { // No tiene token
      return false;
    }
    return true;
  }

  isAuth() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');
    if (!token) { // No tiene token
      this.logout();
      return false;
    }

    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);

    if (!isExpired) { // Si no está expirado el token
      if (!this.auth) {
        this.store.dispatch(llenarSesion({ usuario: <User>this.getUser() })); // Lleno la sesión para evitar errores
        this.store.dispatch(getMe()); // Traigo la información del usuario
      }
      return true;
    }

    this.logout(); // Token expirado
    return false;
  }

  /**
   *
   * @param analizar - Bandera que analiza si necesita enviar a logout si no existe el usuario
   * @returns
   */
  getUser(analizar = true): User {
    let usuario = localStorage.getItem('usuario');
    if (!usuario) {
      if (analizar) {
        this.logout();
      }
      return null;
    }
    const usuarioObj: User = JSON.parse(usuario);
    usuario = Object.setPrototypeOf(usuario, User.prototype);
    return usuarioObj;
  }

  getId() {
    // eslint-disable-next-line no-underscore-dangle
    return this.getUser()?.id;
  }

  logout() {
    this.store.dispatch(cerrarSesion()); // Limpia el store de Auth
  }

  getToken() {
    const token = localStorage.getItem('token');
    return token;
  }

  getMe() {
    return this.http.get<User>(this.getRuta(`api/users/me`));
  }

  verificarNecesitaLogin() {
    const token = localStorage.getItem('token');
    const usuario = localStorage.getItem('usuario');
    if (token && usuario) {
      this.router.navigate(AuthJSStrapi.config.homeRoute);
      return false;
    }
    return true;
  }

  private getRuta(ruta: string) {
    return `${AuthJSStrapi.config.server}/${ruta}`;
  }

  getRecoveryToken(email: string) {
    return this.http.post(`${environment.server}/auth/forgot-password`, { email });
  }


  passwordRecovery(code: string, password: string, passwordConfirmation: string) {
    return this.http.post(`${environment.server}/auth/reset-password`, { code, password, passwordConfirmation });
  }

  // esAdmin() {
  //   return this.getUser(false)?.role.type == 'authenticated';
  // }
}
