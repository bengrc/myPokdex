import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !args)
      return value;
    else
      args=args.toLowerCase();
      
    return value.filter(items=>{
       return items.name.toLowerCase().indexOf(args.toLowerCase()) > -1 
       || items.type.toString().toLowerCase().indexOf(args.toLowerCase()) > -1
       || items.id.startsWith(args) == true 
    })
  }
}
