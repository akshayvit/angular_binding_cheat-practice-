import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacer'
})

export class ReplacerPipe implements PipeTransform {
   girls=["riya","manaswita","asmita","titli","mitul","priya"];
   boys=["ashneer","dipankar","raja","amit","amiya","chandan"];
  transform(value: string, ...args: unknown[]): unknown {
    console.log(value);
    if(this.girls.includes(value.toLowerCase())) return "Mrs. "+value;
    else if(this.boys.includes(value.toLowerCase())) return "Mr. "+value;
    else return "Respected "+value; 
  }

}