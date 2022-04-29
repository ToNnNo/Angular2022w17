import { Component, OnInit } from '@angular/core';
import {PageTitleService} from "../../services/page-title.service";
import {AuthenticationService} from "../../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  state!: boolean;

  constructor(
    private title: PageTitleService,
    private authentication: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Authentification')
    this.state = this.authentication.isAuthenticate();
  }

  public signIn(): void {
    this.state = this.authentication.logIn();

    if( this.route.snapshot.queryParamMap.has('redirect') ) {
      this.router.navigateByUrl( this.route.snapshot.queryParamMap.get('redirect')! );
    }

  }

  public signOut(): void {
    this.state = this.authentication.logOut();
  }

}
