import { Cita } from "../cita/cita.model";
import { Cotizacion } from "../cotizacion/cotizacion.model";

export class Cliente {
  id: string;
  attributes: {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefonoFijo: string;
    telefonoMovil: string;
    email: string;
    rfc: string;
    razonSocial: string;
    appointments: Cita[];
    cotizaciones: Cotizacion[];
  }

  constructor(
    id,
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    telefonoFijo,
    telefonoMovil,
    email,
    rfc,
    razonSocial,
    appointments,
    cotizaciones
    ) {
    this.id = id;

    this.attributes = {
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      telefonoFijo,
      telefonoMovil,
      email,
      rfc,
      razonSocial,
      appointments,
      cotizaciones
    }
  }
  
  get nombre(): string {
    return this.attributes.nombre;
  }
  get apellidoPaterno(): string {
    return this.attributes.apellidoPaterno;
  }
  get apellidoMaterno(): string {
    return this.attributes.apellidoMaterno;
  }
  get telefonoFijo(): string {
    return this.attributes.telefonoFijo;
  }
  get telefonoMovil(): string {
    return this.attributes.telefonoMovil;
  }
  get email(): string {
    return this.attributes.email;
  }
  get rfc(): string {
    return this.attributes.rfc;
  }
  get razonSocial(): string {
    return this.attributes.razonSocial;
  }
  get appointments(): Cita[] {
    return this.attributes.appointments;
  }
  get cotizaciones(): Cotizacion[] {
    return this.attributes.cotizaciones;
  }
}


export interface ClienteResponse {
  data: {
    id: string,
    attributes: {
      nombre: string,
      apellidoPaterno: string,
      apellidoMaterno: string,
      telefonoFijo: string,
      telefonoMovil: string,
      email: string,
      rfc: string,
      razonSocial: string,
      appointments: any,
      cotizaciones: any
    }
  }[];
  meta: any;
}

