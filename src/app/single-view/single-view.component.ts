import { Component, OnInit } from '@angular/core';
import {CartService} from "../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import Products from '../single-product/Products.json';


@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.scss']
})
export class SingleViewComponent implements OnInit {

  constructor( private route:ActivatedRoute,private cart: CartService, private router:Router) { }
  productsList = Products.ProductCollection;
  product:any ;

  ngOnInit() {
    if (this.route.snapshot.params['id'] >this.productsList.length ){
      this.router.navigateByUrl('no-item')
    }
    this.product=this.productsList[this.route.snapshot.params['id']]

  }
  addToCart(singleProduct){
    this.cart.addProduct(singleProduct);

  }

}
