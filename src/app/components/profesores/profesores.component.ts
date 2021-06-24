import { Component, OnInit } from '@angular/core';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit {

  public profesores:any[] = [];
  constructor(public _hs:HogwartsService) {// cargamos profesores mediante el servicio
    this._hs.getProfesores().subscribe((data:any) =>{
      this.profesores = data;
    });
  }

  ngOnInit(): void {
  }

}
