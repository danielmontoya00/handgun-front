import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { map, Observable, throwError } from 'rxjs';
import { AuthJSStrapi } from 'src/app/auth_services/auth';
import { AppState } from 'src/app/store/app.state';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  auth = false;

  constructor(
    private http: HttpClient,
    private store: Store<AppState>,
    private router: Router,
  ) {
    // this.store.select('auth').subscribe((x) => this.auth = x.usuario ? true : false);

  }

  getIncidentes(): Observable<any> {
    console.log("GET INCIDENTES", this.getRuta(`api/incidentes?populate=fotogramas`))
    return this.http.get(this.getRuta(`api/incidentes?populate=fotogramas`)).pipe(
        map((res) => {
            console.log("RES", res)
            return res;
        })
    );
  }

  private getRuta(ruta: string) {
    return `${AuthJSStrapi.config.server}/${ruta}`;
  }
}
