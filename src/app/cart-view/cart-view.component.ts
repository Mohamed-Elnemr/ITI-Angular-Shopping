import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  constructor(private cart: CartService) { }

  products= [];
  ngOnInit() {
    this.products= this.cart.getProduct()
  }

}
