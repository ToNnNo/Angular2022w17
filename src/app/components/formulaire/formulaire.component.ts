import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {AbstractControlDirective} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  products: Product[] = [];
  product: Product = { name: '', price: 0 }; // Model

  constructor() { }

  ngOnInit(): void {
  }

  public save(form: AbstractControlDirective): void {

    form.control?.markAllAsTouched();

    if(form.valid) {
      this.products.push(this.product);
      this.product = {name: '', price: 0};
      form.reset(this.product);
    }
  }

}
