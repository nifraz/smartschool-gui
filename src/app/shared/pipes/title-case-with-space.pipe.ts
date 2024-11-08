import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseWithSpace',
  standalone: true
})
export class TitleCaseWithSpacePipe implements PipeTransform {

  transform(value: any): string {
    if (!value) return value;
    
    // Add a space between letters and numbers
    const spacedText = value.replace(/([a-zA-Z])(?=\d)/g, '$1 ');

    // Convert to Title Case
    return spacedText.toLowerCase().replace(/\b\w/g, (char: string) => char.toUpperCase());
  }

}
