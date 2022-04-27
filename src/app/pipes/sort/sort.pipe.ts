import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "../../interfaces/product.interface";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], ...args: any[]): Product[] {
    const [property, asc = true] = args;

    const order = asc ? 1 : -1;

    products.sort((a: Product, b: Product) => {
      /*if(a.name < b.name) {
        return -1;
      }*/

      // @ts-ignore
      if(a[property] < b[property]) {
        return -order;
      }

      // @ts-ignore
      if(a[property] > b[property]) {
        return order;
      }

      return 0;
    });

    return products;
  }

}
