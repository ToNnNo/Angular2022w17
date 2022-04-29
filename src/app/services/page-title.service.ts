import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private title = new BehaviorSubject<string>('Formation');

  constructor() { }

  public getTitle(): Subject<string> {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title.next(title);
  }
}
