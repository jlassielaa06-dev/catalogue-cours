import { Pipe, PipeTransform } from '@angular/core';
// import { Cours } from '../composants/liste-cours/liste-cours';


@Pipe({
  name: 'placesRestantes',
})
export class PlacesRestantesPipe implements PipeTransform {
  transform(Places:number ,seuille :number=5 ): string{
    if(Places===0)
      return "complet";
    
    if(Places===1)
      return "Derniere place !";
    
    if (Places<=seuille)
      return `Plus que ${Places} places`;

    return `${Places} places disponibles`;

  }
}
