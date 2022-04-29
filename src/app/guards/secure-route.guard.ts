import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../services/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class SecureRouteGuard implements CanActivate {

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // return this.authentication.isAuthenticate();

    if(this.authentication.isAuthenticate()) {
      return true;
    }

    return this.router.createUrlTree(
      [`/authentification`],
      { queryParams: { 'redirect': state.url}}
    );

    /**
     * Exercice:
     *
     * 1. Retourner true si on est connecté sinon false. OK
     *
     * 2. Quand non connecté, redirigé vers la page d'authentification (levé main) OK
     *
     * 3. Si redirection vers page d'authentification, après authentification revenir à la page demandé initialement
     */

  }

}
