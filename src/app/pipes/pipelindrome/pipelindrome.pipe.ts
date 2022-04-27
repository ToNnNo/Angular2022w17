import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelindrome'
})
export class PipelindromePipe implements PipeTransform {

  transform(value: string|undefined, ...args: unknown[]): string|undefined {
    if(value) {
      return [...value].reverse().join('');
    }

    return value;
  }

}
