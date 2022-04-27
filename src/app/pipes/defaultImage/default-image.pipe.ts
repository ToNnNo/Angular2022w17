import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(source: string|null, placeholder: string, ...args: unknown[]): string {
    // const [placeholder] = args;

    if(source == null) {
      return placeholder;
      // return "https://st3.depositphotos.com/1322515/35964/v/1600/depositphotos_359648638-stock-illustration-no-image-available-icon.jpg"
    }

    return source;
  }

}
