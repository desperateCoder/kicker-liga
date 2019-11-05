import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URLS } from './urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor(private http: HttpClient) { }

  public login(user: string, password: string): Observable<object> {
    const body = new URLSearchParams();
    body.set('username', user);
    body.set('password', password);

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    return this.http.post(URLS.login, body, options);
  }

  public getLocations(): Observable<object> {
      return this.http.get(URLS.locations);
  }

}
