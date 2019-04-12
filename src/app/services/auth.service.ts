import { Injectable } from '@angular/core';
import {User } from "../login/user";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): any{
    if (this.isLoggedIn()){
      return true;
    }  else{
      return this.router.navigateByUrl('login');
    }

  }
  loggedIn= false;

  constructor(private router:Router) { }

  public login(UserInfo:User){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }

  public isLoggedIn(){
    if (localStorage.getItem('ACCESS_TOKEN') !== null){
      return true;
    }else {
      return false;
    }
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

}
