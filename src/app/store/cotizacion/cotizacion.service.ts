import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cotizacion, CotizacionResponse } from './cotizacion.model';

@Injectable({
  providedIn: 'root'
})
export class CotizacionService {

  constructor(
    private http: HttpClient
  ) { }

  getCotizaciones() {
    return this.http.get<CotizacionResponse>(this.getLink('/api/cotizaciones?populate=direccion,archivo,cliente')).pipe(
      map((response) => {
        return response.data.map((cotizacion) => {
          const cotizacionObj = new Cotizacion(
            cotizacion.id,
            cotizacion.attributes.createdAt,
            cotizacion.attributes.updatedAt,
            cotizacion.attributes.publishedAt,
            cotizacion.attributes.direccion,
            cotizacion.attributes.archivo,
            cotizacion.attributes.cliente.data
            );
          return cotizacionObj;
        });
      })
    );
  }

  createCotizacion(
    cliente: string,
    direccion: any
  ) {
    return this.http.post(this.getLink('/api/cotizaciones'), {
      data: {
        cliente,
        direccion: {
          __component: "direccion.direccion",
          calle: direccion.calle,
          cp: direccion.cp,
          numeroExt: direccion.numeroExt,
          numeroInt: direccion.numeroInt,
          colonia: direccion.colonia,
          ciudad: direccion.ciudad,
          estado: direccion.estado
        }
      }
    })
  }

  modificarCotizacion(
    id: string,
    cliente: string,
    direccion: any
  ) {
    return this.http.put(this.getLink('/api/cotizaciones/'+id), {
      data: {
        cliente,
        direccion: {
          __component: "direccion.direccion",
          calle: direccion.calle,
          cp: direccion.cp,
          numeroExt: direccion.numeroExt,
          numeroInt: direccion.numeroInt,
          colonia: direccion.colonia,
          ciudad: direccion.ciudad,
          estado: direccion.estado
        }
      }
    })
  }

  eliminarCotizacion(id: string) {
    return this.http.delete(this.getLink('/api/cotizaciones/'+id));
  }

  getLink(link: string) {
    return `${environment.server}${link}`;
  }
}
