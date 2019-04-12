import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {SingleViewComponent} from "./single-view/single-view.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {CartViewComponent} from "./cart-view/cart-view.component";
import {RegisterComponent} from "./register/register.component";
import {CheckoutComponent} from "./checkout/checkout.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: SingleViewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },
  {path: 'cart',component:CartViewComponent},
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
