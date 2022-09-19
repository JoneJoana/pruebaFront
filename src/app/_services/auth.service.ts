import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const AUTH_URL='https://api.themoviedb.org/3/';
const API_KEY = 'cf5b7083b6fd3be488d414abc816e750';

export interface User {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  getToken(): Observable<any>{
    return this.http.get(AUTH_URL+"authentication/token/new?api_key="+API_KEY);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${AUTH_URL}authentication/token/validate_with_login?api_key=${API_KEY}`, data);
  }

  getByName(name: string): Observable<any> {
    return this.http.get(`${AUTH_URL}/users/${name}`);
  }

}
