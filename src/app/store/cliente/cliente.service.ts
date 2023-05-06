import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente, ClienteResponse } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(
    private http: HttpClient
  ) { }

  getClientes() {
    return this.http.get<ClienteResponse>(this.getLink('/api/clients?populate=appointments,cotizaciones')).pipe(
      map((response) => {
        return response.data.map((cliente) => {
          const clienteObj = new Cliente(
            cliente.id,
            cliente.attributes.nombre,
            cliente.attributes.apellidoPaterno,
            cliente.attributes.apellidoMaterno,
            cliente.attributes.telefonoFijo,
            cliente.attributes.telefonoMovil,
            cliente.attributes.email,
            cliente.attributes.rfc,
            cliente.attributes.razonSocial,
            cliente.attributes.appointments,
            cliente.attributes.cotizaciones
            );
          return clienteObj;
        });
      })
    );
  }

  createCliente(
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    telefonoFijo: string,
    telefonoMovil: string,
    email: string,
    rfc: string,
    razonSocial: string
  ) {
    return this.http.post(this.getLink('/api/clients'), {
      data: {
       nombre,
       apellidoPaterno,
       apellidoMaterno,
       telefonoFijo,
       telefonoMovil,
       email,
       rfc,
       razonSocial
      }
    })
  }

  modificarCliente(
    id: string,
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    telefonoFijo: string,
    telefonoMovil: string,
    email: string,
    rfc: string,
    razonSocial: string
  ) {
    return this.http.put(this.getLink('/api/clients/'+id), {
      data: {
       nombre,
       apellidoPaterno,
       apellidoMaterno,
       telefonoFijo,
       telefonoMovil,
       email,
       rfc,
       razonSocial
      }
    })
  }

  eliminarCliente(id: string) {
    return this.http.delete(this.getLink('/api/clients/'+id));
  }

  getLink(link: string) {
    return `${environment.server}${link}`;
  }
}
