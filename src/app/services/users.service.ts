import { Injectable } from '@angular/core';
import * as URLS from '../domains/uris';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public apiRegister: string = URLS.API_USER;

  constructor(private http:HttpClient, private router:Router) { }

  public serviceCreate(newUser:Users):Observable<Users>{
    return this.http.post<Users>(this.apiRegister + '/create', newUser);
  }
}
