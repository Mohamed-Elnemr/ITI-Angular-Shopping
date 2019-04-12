import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService,private route:Router) { }


  ngOnInit() {
  }

  checkLogin(){
    if (this.auth.isLoggedIn()){
      return true;
    }else{
      return false;

    }
  }
  logOut(){
    this.auth.logout();
    this.route.navigateByUrl('/');

  }
}
