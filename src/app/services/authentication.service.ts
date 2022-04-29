import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private static readonly TOKEN = 'authenticate';

  constructor() { }

  public logIn(): boolean {
    // récupère login & password
    // fait une requete l'api (POST) pour authentification en transmettant les ids
    // en réponse, on récupère le jeton d'authentification
    // on sauvegarde le jeton dans le local Storage <--

    localStorage.setItem(AuthenticationService.TOKEN, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    return true;
  }

  public logOut(): boolean {
    localStorage.removeItem(AuthenticationService.TOKEN);
    return false;
  }

  public getToken(): string|null {
    return localStorage.getItem(AuthenticationService.TOKEN);
  }

  public isAuthenticate(): boolean {
    return localStorage.getItem(AuthenticationService.TOKEN) != null;
  }

}
