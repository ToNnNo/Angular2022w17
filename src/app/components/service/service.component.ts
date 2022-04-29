import { Component, OnInit } from '@angular/core';
import { Rot13Service } from "../../services/rot13.service";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  secrete!: string
  crypted!: string

  constructor(private cipher: Rot13Service) { }

  ngOnInit(): void {
  }

  public crypt(): void {
    this.crypted = this.cipher.encode(this.secrete);
  }

}
