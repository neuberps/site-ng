import { User } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl: string = "http://localhost:9008/auth";

  // Chave estática da sessão
  static SESSION_USER_KEY = 'session_user';

  constructor( private httpClient: HttpClient) { }


  // Método para limpar os dados da sessão
  clean(): void {
    window.sessionStorage.clear();
  }

  // Método para limpar os dados do formulário
  clearFormData(): void {}


  // Função login:
  login(email: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(
      tap((value) => {
        this.saveUserDataInSession(value.user);
    })
    )
  }

// Função Cadastrar
  signup(name: string, email: string, username: string, password: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, username, password }).pipe(
      tap((value) => {
        this.saveUserDataInSession(value.user);
    })
    )
  }

  // Método privado (Armazena os dados relevantes na sessão do usuário)
  private saveUserDataInSession(user: User) {
    sessionStorage.setItem(LoginService.SESSION_USER_KEY, JSON.stringify(user));
  }

  // Método que verifica o usuário na sessão e retorna após converter de Json para Objeto:
  public getUserSession(): any {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }


  // Método que verifica se o usuário está autenticado na apliação.
  public isLoggedIn(): boolean {
    if (typeof window !== 'undefined') {
    const user = window.sessionStorage.getItem(LoginService.SESSION_USER_KEY);
    if (user) {
      return true;
    }
  }
    return false;
  }

  logout() {
    sessionStorage.removeItem(LoginService.SESSION_USER_KEY); // Limpando os dados de usuário da sessão.
  }

  // Método para atualizar a página
  reloadPage(): void {
    window.location.reload();
  }

}
