import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Rot13Service {

  constructor() { }

  public encode(s: string): string {
    return (s + '').replace(/[a-zA-Z]/gi, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + (s.toLowerCase() < 'n' ? 13 : -13)).toUpperCase();
    });
  }

  public decode(s: string): string {
    return this.encode(s);
  }
}
