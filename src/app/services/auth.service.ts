import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public objUser: Users;

  constructor(private http: HttpClient, private router: Router) {
    this.objUser = new Users(0, 0, '', '', '');
  }

  public exit(): void{
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  public getToken(): any{
    return localStorage.getItem('token');
  }

  public getUser(): Users{
    return this.objUser;
  }

  public verifyCredentials(): boolean{
    if (localStorage.getItem('Token')) {
      const myToken = this.getToken();
      try {
        const myObj = jwtDecode(myToken) as any;
        this.objUser.cod = myObj.id;
        this.objUser.email = myObj.email;
        console.log('Token decode: ', myObj);
        return true;
      } catch (error) {
        return false;
      }
    }
    return false;
  }
}
