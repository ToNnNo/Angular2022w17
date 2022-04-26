import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  name = 'Stéphane'; // string
  product = { name: 'Pomme', price: 12.99 }; // object
  html = '<p><b>Hello World</b></p><script>alert("attack")</script>'; // string
  source = 'assets/images/mandalorian.jpg'; // string

  message?: string; //string|undefined;

  users = ['Remy', 'William', 'Jason', 'Arthur', 'Brandon', 'Chistopher', 'Yves', 'Maelle'];

  constructor() { }

  ngOnInit(): void {
  }

  public clicked(): void {
    alert('Hello World');
  }

  public confirmation(event: MouseEvent): void {
    console.log(event);
    if (confirm('Etes vous sur ?')) {
      event.preventDefault();
    }
  }

  public getMessageValue(): void {
    alert(this.message);
  }

}
