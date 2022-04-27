import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  show = true;
  display: string|undefined;

  classes = ['text-success', 'text-capitalize'];

  payment = 'pending';

  progress = 10;
  bgcolor = 'red';

  constructor() { }

  ngOnInit(): void {
  }

  public getMessage(): string | null {
    if( this.show ) {
      return 'Hello World';
    }

    return null;
  }

}
