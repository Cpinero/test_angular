import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'patronus'
})
export class PatronusPipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 0){
      return value;
    }else{
      return "Sin patronus"
    }
  }

}
