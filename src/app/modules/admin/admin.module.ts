import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { IncidenteComponent } from './incidente/incidente.component';



@NgModule({
  declarations: [
    AdminComponent,
    IncidenteComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AgmCoreModule
  ]
})
export class AdminModule { }
