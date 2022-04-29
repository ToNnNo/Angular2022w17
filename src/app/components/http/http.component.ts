import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../services/page-title.service";
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../interfaces/user.interface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  users: UserInterface[] = [];

  /**
   * $ à la fin d'une variable est une convention et
   * signifie que la variable contient une valeur asynchrone (Observable ou Promise)
   */
  users$?: Observable<UserInterface[]>;

  constructor(
    private title: PageTitleService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Http');

    this.userService.getAllUsers().subscribe({
      next: users => this.users = users,
      complete: () => console.log('fini ?')
    });

    this.users$ = this.userService.getAllUsers();
  }

  public addUser(): void {
    const user: UserInterface = {
      name: 'Stéphane',
      username: 'ToNo',
      email: 'smenut@dawan.fr',
      phone: '06 118 218 00',
      website: 'https://www.dawan.fr'
    }

    this.userService.save(user);
  }

}
