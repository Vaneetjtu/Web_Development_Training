import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderpipe'
})
export class GenderPipe implements PipeTransform {

  transform(input:string) : string {

    let output:string  = "";

    if(  input ==  "M" || input == "m")
      output  = "Male";
    
    if(  input.toUpperCase() ==  "F" )
      output  = "Female";

    return output;
  }

}
