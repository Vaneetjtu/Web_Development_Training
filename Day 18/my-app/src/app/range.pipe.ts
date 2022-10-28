import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rangepipe'
})
export class RangePipe implements PipeTransform {

  transform(input:any[], min:number, max:number): any[]  {

    let output:any[] = [];

   // output  = input.filter( item => item.total >= min && item.total <= max );

   for(let item of input)
   {
      if(item.total >= min && item.total <= max )
      {
        output.push( item );
      }
   }

    return output;
  }

}
