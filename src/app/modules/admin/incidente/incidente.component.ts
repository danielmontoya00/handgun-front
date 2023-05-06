import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.scss']
})
export class IncidenteComponent implements OnInit {
  @Input() incidente: any;

  constructor() {
    // this.incidente = this.incidente.attributes;
  }

  ngOnInit(): void {
    console.log(this.incidente)
  }

}

interface Incidente {
  latitud: number;
  longitud: number;
  fotogramas: Array<any>;
}