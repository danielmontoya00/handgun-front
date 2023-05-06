import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../cliente/cliente.model';
import { Cita, CitaResponse } from './cita.model';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(
    private http: HttpClient
  ) { }

  getCitas() {
    return this.http.get<CitaResponse>(this.getLink('/api/appointments?populate=client,operador,direccion')).pipe(
      map((response) => {
        return response.data.map((cita) => {
          const citaObj = new Cita(
            cita.id,
            cita.attributes.direccion,
            cita.attributes.client.data,
            cita.attributes.tipoTrabajo,
            cita.attributes.fecha,
            cita.attributes.comentarios,
            cita.attributes.operador,
            cita.attributes.estatus
            );
          return citaObj;
        });;
      })
    );
  }

  createCita(
    client: string,
    direccion: any,
    tipoTrabajo: string,
    fecha: Date,
    comentarios: string,
    operador: string,
    estatus: string
  ) {
    return this.http.post(this.getLink('/api/appointments'), {
      data: {
        client,
        direccion: {
          __component: "direccion.direccion",
          calle: direccion.calle,
          cp: direccion.cp,
          numeroExt: direccion.numeroExt,
          numeroInt: direccion.numeroInt,
          colonia: direccion.colonia,
          ciudad: direccion.ciudad,
          estado: direccion.estado
        },
        tipoTrabajo,
        fecha,
        comentarios,
        operador,
        estatus
      }
    })
  }

  modificarCita(
    id: string,
    client: string,
    direccion: any,
    tipoTrabajo: string,
    fecha: Date,
    comentarios: string,
    operador: string,
    estatus: string
  ) {
    return this.http.put(this.getLink('/api/appointments/' + id), {
      data: {
        client,
        direccion: {
          __component: "direccion.direccion",
          calle: direccion.calle,
          cp: direccion.cp,
          numeroExt: direccion.numeroExt,
          numeroInt: direccion.numeroInt,
          colonia: direccion.colonia,
          ciudad: direccion.ciudad,
          estado: direccion.estado
        },
        tipoTrabajo,
        fecha,
        comentarios,
        operador,
        estatus
      }
    })
  }

  eliminarCita(id: string) {
    return this.http.delete(this.getLink('/api/appointments/'+id));
  }

  getLink(link: string) {
    return `${environment.server}${link}`;
  }
}
