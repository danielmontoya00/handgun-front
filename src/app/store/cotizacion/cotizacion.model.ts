import { Direccion } from "../cita/cita.model";
import { Cliente } from "../cliente/cliente.model";

export class Cotizacion {
  id: string;
  attributes: {
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    direccion: Direccion;
    archivo: any;
    cliente: any;
  };

  constructor(
    id,
    createdAt,
    updatedAt,
    publishedAt,
    direccion,
    archivo,
    cliente: Cliente
  ) {
    this.id = id;
    this.attributes = {
      createdAt,
      updatedAt,
      publishedAt,
      direccion,
      archivo,
      cliente: null
    }

    if(cliente) {
      this.attributes.cliente = new Cliente(
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
      )
    }
  }

  get createdAt(): Date {
    return this.attributes.createdAt;
  }
  get updatedAt(): Date {
    return this.attributes.updatedAt;
  }
  get publishedAt(): Date {
    return this.attributes.publishedAt;
  }
  get direccion(): Direccion {
    return this.attributes.direccion;
  }
  get archivo(): any {
    return this.attributes.archivo;
  }
  get cliente(): any {
    return this.attributes.cliente;
  }
}


export interface CotizacionResponse {
  data: {
    id: string,
    attributes: {
      createdAt: Date,
      updatedAt: Date,
      publishedAt: Date,
      direccion: Direccion,
      archivo: any,
      cliente: { data: Cliente }
    }
  }[],
  meta: any
}