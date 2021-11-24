import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";
import { Users } from '../interface/users.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  /**
   * Returns list of all users
   * @returns Array
   */
  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(environment.apiURL);
  }

  /**
   * Return a user searched by Id
   * @param id
   * @returns User
   */
  getUser(id: string): Observable<any>{
    return this.http.get(environment.apiURL + id);
  }

  /**
   * Delete user by id
   * @param id
   * @returns
   */
  deleteUser(id: string): Observable<any>{
    return this.http.delete(environment.apiURL + id);
  }

  /**
   * Create user
   * @param user
   * @returns
   */
  createUser(user: Users): Observable<any> {
    return this.http.post(environment.apiURL, user);
  }

  /**
   * Update user by id
   * @param id
   * @param user
   * @returns
   */
  updateUser(id: string, user: Users): Observable<any> {
    return this.http.put(environment.apiURL+id, user);
  }

}
