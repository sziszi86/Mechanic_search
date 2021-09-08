import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: any, name: string, city: string): any {
   if (input) {
     return value.filter(user => user.location.city.toLowerCase().indexOf(input.toLowerCase()) >= 0)
   } else {
     return value;
   }
  }
}

