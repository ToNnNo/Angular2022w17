import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecureRouteGuard implements CanActivate {

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return false;

    /**
     * Exercice:
     *
     * 1. Retourner true si on est connecté sinon false.
     *
     * 2. Quand non connecté, redirigé vers la page d'authentification (levé main)
     *
     * 3. Si redirection vers page d'authentification, après authentification revenir à la page demandé initialement
     */

  }

}
