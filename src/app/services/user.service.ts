import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "../interfaces/user.interface";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private static readonly USER_API_URL = `${environment.api_url}/users`;

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) { }

  public getAllUsers(): Observable<UserInterface[]> {
    /*let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.authentication.getToken()}`);*/

    return this.http.get<UserInterface[]>(UserService.USER_API_URL);
  }

  public save(user: UserInterface): void {
    /*let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.authentication.getToken()}`);*/

    this.http.post<UserInterface>(UserService.USER_API_URL, user).subscribe({
      next: user => console.log(user)
    });
  }
}
