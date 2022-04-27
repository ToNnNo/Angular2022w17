import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {PRODUCT} from "../../mocks/product.mock";

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  palindrome?: string;
  products: Product[] = PRODUCT;

  asc = true;
  property!: string;

  constructor() { }

  ngOnInit(): void {
  }

  public sortBy(property: string): void {
    this.asc = !this.asc;
    this.property = property;
  }

}
