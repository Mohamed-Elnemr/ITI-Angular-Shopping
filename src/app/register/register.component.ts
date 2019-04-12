import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators,FormBuilder} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isSubmitted  =  false;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm  =  this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });
  }
  get formControls() {
    return this.registerForm.controls;
  }
  register(){
    console.log(this.registerForm.value);
    this.isSubmitted = true;
    if(this.registerForm.invalid){
      return;
    }
    this.authService.login(this.registerForm.value);
    this.router.navigateByUrl('/');
  }

}
