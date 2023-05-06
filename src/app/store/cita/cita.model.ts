import { User } from "src/app/auth_services/model/user.model";
import { Cliente } from "../cliente/cliente.model";

export class Cita {
  id: string;
  attributes: {
    direccion: Direccion;
    client: Cliente;
    tipoTrabajo: 'techo' | 'muro';
    fecha: Date;
    comentarios: string;
    operador: User;
    estatus: 'generada' | 'finalizada';
  }

  constructor(id, direccion, cliente: Cliente, tipoTrabajo, fecha, comentarios, operador, estatus) {
    this.id = id;
    this.attributes = {
      direccion,
      client: new Cliente(
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
      ),
      tipoTrabajo,
      fecha,
      comentarios,
      operador,
      estatus
    }    
  }

  get direccion(): Direccion {
    return this.attributes.direccion;
  }
  get client(): Cliente {
    return this.attributes.client;
  }
  get tipoTrabajo(): 'techo' | 'muro' {
    return this.attributes.tipoTrabajo;
  }
  get fecha(): Date {
    return this.attributes.fecha;
  }
  get comentarios(): string {
    return this.attributes.comentarios;
  }
  get operador(): User {
    return this.attributes.operador;
  }
  get estatus(): 'generada' | 'finalizada' {
    return this.attributes.estatus;
  }
 
}

export interface CitaResponse {
  data: {
    id: string,
    attributes: {
      direccion: Direccion;
      client: {data: Cliente};
      tipoTrabajo: 'techo' | 'muro';
      fecha: Date;
      comentarios: string;
      operador: User;
      estatus: 'generada' | 'finalizada';
    }
  }[];
  meta: any;
}

export interface Direccion {
  calle: string;
  cp: string;
  numeroExt: string;
  numeroInt: string;
  colonia: string;
  ciudad: string;
  estado: string;
}