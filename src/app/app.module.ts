import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CartCounterComponent } from './cart-counter/cart-counter.component';

import { LoginComponent } from './login/login.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule} from "./app-routing.module";
import { SingleViewComponent } from './single-view/single-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartCounterComponent,
    LoginComponent,
    SingleProductComponent,
    HomeComponent,
    SingleViewComponent,
    CartViewComponent,
    NotFoundComponent,
    RegisterComponent,
    CheckoutComponent,

  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
