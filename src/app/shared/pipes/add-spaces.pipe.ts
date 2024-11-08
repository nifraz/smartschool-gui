import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpaces',
  standalone: true
})
export class AddSpacesPipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return value;
    return value.replace(/([A-Z])/g, ' $1').trim();
  }

}
