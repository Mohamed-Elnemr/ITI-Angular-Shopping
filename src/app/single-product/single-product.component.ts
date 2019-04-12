import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "./ProductModel";
import {CartService} from "../services/cart.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() singleProduct: ProductModel;

  constructor(private cart:CartService, private route:ActivatedRoute ) {
  }

  ngOnInit() {

  }

  addToCart(singleProduct){
    this.cart.addProduct(singleProduct);

  }







}
