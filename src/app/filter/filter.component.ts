import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  now = new Date();

  nb = 5;
  start = 0;
  end = this.nb;

  cfas = [
    'Bilal', 'Arthur', 'Burkhan', 'Fatimata', 'Oumou', 'Yanis', 'Alaaedine', 'Muhammad', 'Michel',
    'Yves', 'Florian', 'Jason', 'Brandon', 'Joey', 'Erwan', 'Abdoulaye', 'Chirstopher', 'Soufiane', 'Aurélien',
    'William', 'Rémy', 'Maelle'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public next(): void {
    if (this.end < this.cfas.length) {
      this.start += this.nb;
      this.end += this.nb;
    }
  }

  public prev(): void {
    if (this.start > 0) {
      this.start -= this.nb;
      this.end -= this.nb;
    }
  }

}
