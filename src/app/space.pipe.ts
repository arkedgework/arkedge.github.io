import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'createSpace'})
export class CreateSpace implements PipeTransform {
    transform(value: string): string {
      let newStr = value;
      newStr = newStr.replace(/([A-Z])/g, ' $1').trim();
      return newStr;
    }
  }
