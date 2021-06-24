import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HogwartsService {

  private urlApi:string = "http://hp-api.herokuapp.com/api/characters";

  constructor(private http:HttpClient) { }

  //Obtener datos por http
  getPersonajes(casa:string){
    const url = `${ this.urlApi }/house/${casa}`;
    return this.http.get(url);
  }

  getEstudiantes(){
    const url = `${ this.urlApi }/students`;
    return this.http.get(url);
  }

  getProfesores(){
    const url = `${ this.urlApi }/staff`;
    return this.http.get(url);
  }
}
