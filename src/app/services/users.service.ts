import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


  getUsers(): Observable<any>{
    return this.http.get(environment.apiURL);
  }

  getUser(id: string): Observable<any>{
    return this.http.get(environment.apiURL + id);
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(environment.apiURL + id);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(environment.apiURL, user);
  }

  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(environment.apiURL+id, user);
  }

}
