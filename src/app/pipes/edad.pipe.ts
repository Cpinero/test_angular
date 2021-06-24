import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edad'
})
export class EdadPipe implements PipeTransform {

  transform(value:string): string {
    //Ajuste de formato de fecha para guardarlo en la variable convertAge
    let fecha = value.split("-").reverse().join("-");
      const convertAge = new Date(fecha);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const edad = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      if(!isNaN(edad)){
        return edad.toString();
      }else{
        return "Edad Desconocida";
      }
  }

}
