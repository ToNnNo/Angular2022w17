import {Component, DEFAULT_CURRENCY_CODE, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.css']
})
export class LocaleComponent implements OnInit {

  /*locale = 'en';
  devise = 'USD';*/

  now = new Date();

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    @Inject(DEFAULT_CURRENCY_CODE) public devise: string
  ) { }

  ngOnInit(): void {
  }

}
