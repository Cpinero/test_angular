import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HogwartsService } from 'src/app/services/hogwarts.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public casas:any[] = ['slytherin','gryffindor','ravenclaw ','hufflepuff'];
  public personajes: any[] = [];
  public casa:string = "";

  constructor(public _hs:HogwartsService) {
  }

  estudiantes(form:NgForm){//cargamos los personajes por el servicio agregando la casa como parametro
    if(form.value.casa != ""){
      this._hs.getPersonajes(form.value.casa).subscribe((data:any) =>{
        this.personajes = data;
      });
    }else{
      return
    }
  }


  ngOnInit(): void {
  }

}
