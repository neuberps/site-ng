import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:9008/auth"

  constructor( private httpClient: HttpClient) { }

  // Função login:
  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
      sessionStorage.setItem("auth-token",value.token)
      sessionStorage.setItem("username",value.username)
    })
    )
  }

  signup(username: string, email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { username, email, password }).pipe(
      tap((value) => {
      sessionStorage.setItem("auth-token",value.token)
      sessionStorage.setItem("username",value.username)
    })
    )
  }
}
