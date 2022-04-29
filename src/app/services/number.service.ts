import { Injectable } from '@angular/core';
import {Observable, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private numbers = [...Array(10).keys()].map(v => v+1); // [1, ..., 10]
  private id = 0;

  constructor() { }

  public getNumbers(): Observable<number[]> {
    return new Observable<number[]>((subscriber: Subscriber<number[]>) => {

      /*const last = 10;
      for(let i = 0; i < last; i++) {
        setTimeout( () => {
          subscriber.next(this.numbers.map( v => v*(i+1) ));
          console.log(i+1);
          if(i == last-1) {
            subscriber.complete();
          }
        }, (2000*i) );
      }*/

      /*subscriber.next(this.numbers);
      console.log(1);

      this.id = setTimeout( () => {
        subscriber.next(this.numbers.map( v => v*2 ));
        console.log(2);
      }, 2000);

      this.id = setTimeout( () => {
        subscriber.next(this.numbers.map( v => v*3 ));
        console.log(3);
      }, 4000);

      this.id = setTimeout( () => {
        subscriber.next(this.numbers.map( v => v*4 ));
        console.log(4);
        subscriber.complete();
      }, 6000);

      this.id = setTimeout( () => {
        subscriber.next(this.numbers.map( v => v*5 ));
        console.log(5);
        subscriber.complete();
      }, 8000);*/

      let i = 1;

      subscriber.next(this.numbers);
      console.log(i);

      this.id = setInterval( () => {
        ++i;
        subscriber.next(this.numbers.map( v => v*i ))
        console.log(i);
        if(i == 5) {
          subscriber.complete();
        }
      }, 2000);


      // Teardown Logic
      return () => {
        console.log('teardown');
        clearTimeout(this.id);
        subscriber.complete();
      }

    });

  }
}
