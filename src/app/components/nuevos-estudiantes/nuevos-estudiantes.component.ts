import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevos-estudiantes',
  templateUrl: './nuevos-estudiantes.component.html',
  styleUrls: ['./nuevos-estudiantes.component.css']
})
export class NuevosEstudiantesComponent implements OnInit {
  public estudiantes:any;

  constructor() {
    let local:any = localStorage.getItem('estudiantes');
    this.estudiantes = JSON.parse(local)
    console.log(this.estudiantes)
  }

  ngOnInit(): void {

  }

}
