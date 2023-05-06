import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  title = 'My first AGM project';
  lat = 31.68296;
  lng = -106.424496;

  incidentes = [];


  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.getIncidentes().subscribe((res) => {
      this.incidentes = res.data

      // console.log(this.incidentes);
    });

    
  }

}
