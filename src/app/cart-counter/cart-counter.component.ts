import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {BehaviorSubject} from "rxjs";
import {ProductModel} from "../single-product/ProductModel";

@Component({
  selector: 'app-cart-counter',
  templateUrl: './cart-counter.component.html',
  styleUrls: ['./cart-counter.component.scss']
})
export class CartCounterComponent implements OnInit {

  @Input() count: number= 0;
  returnedCount : BehaviorSubject<number>;
  products: ProductModel[]=[];
  test: any;
  constructor(private cart:CartService) {
    // this.count=cart.getCartCount()
    console.log(this.count)
  }

  ngOnInit() {
    this.cart.getCartCount().subscribe(data=>{
      this.count=data;
      console.log(data);
    })

    }

  getCrtedProducts(){
    console.log("WTF?")
    this.products=this.cart.getProduct()
   }

   removeFromCart(product:ProductModel){
    this.cart.removeFromCart(product);
    this.getCrtedProducts()

   }








}
