import { Injectable } from '@angular/core';
import {ProductModel} from "../single-product/ProductModel";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private count= new BehaviorSubject<number>(0);
  product:ProductModel;
  quantity: number;
  products = [];
  sum: number= 0 ;
  cartedProduct={
    product: this.product,
    quantity:this.quantity,
  };
  alreadyCartedProducts: any=[{}];

  constructor() { }

  addProduct(singleProduct){
    let count2 =this.count.value;
    count2 += 1;

    this.count.next(count2);
    this.cartedProduct.product=singleProduct;
    this.cartedProduct.quantity=1;

    // this.alreadyCartedProducts= JSON.parse(localStorage.getItem('products'));
    // if (this.alreadyCartedProducts != null){
    //     console.log(this.alreadyCartedProducts)
    //     for(let i =0;i<this.alreadyCartedProducts.length ; i++ ){
    //     if (this.alreadyCartedProducts[i].product.ID === singleProduct.ID){
    //       console.log(true);
    //       this.alreadyCartedProducts.quantity +=1;
    //       this.alreadyCartedProducts.product=this.alreadyCartedProducts[i].product;
    //       this.products.push(this.alreadyCartedProducts)
    //       // localStorage.setItem('products',JSON.stringify(this.products));
    //     }else{
    //       this.cartedProduct.product=singleProduct;
    //       this.cartedProduct.quantity=1;
    //       this.products.push(this.cartedProduct)
    //       // localStorage.setItem('products',JSON.stringify(this.products));
    //
    //     }
    //   }}
    // else{
    //   this.cartedProduct.product=singleProduct;
    //   this.cartedProduct.quantity=1;
    //   this.products.push(this.cartedProduct)
    //   // localStorage.setItem('products',JSON.stringify(this.products));
    // }
    //
    this.products.push(this.cartedProduct)
    localStorage.setItem('products',JSON.stringify(this.products));

  }


  getProduct() {

    this.products= JSON.parse(localStorage.getItem('products'));

    return this.products;

  }

  removeFromCart(product:ProductModel){
    let count2 =this.count.value;
    count2 -= 1;
    this.count.next(count2);
    this.products= JSON.parse(localStorage.getItem('products'));
    var removeIndex = this.products.map(function(product) { return product.ID; })
      .indexOf(product.ID);
    this.products.splice(removeIndex,1)
    localStorage.setItem('products',JSON.stringify(this.products));

  }

  getCartCount(){
    return this.count.asObservable()
  }

  getCountFromCart(){
    let sum: number=0;
    this.alreadyCartedProducts=JSON.parse(localStorage.getItem('products'));
    if(this.alreadyCartedProducts != null){
      for (let i =0 ; i<this.alreadyCartedProducts.length || 0;i++){
        sum +=  Number(this.alreadyCartedProducts[i].quantity);
      }
      return sum;
    }
    }

}
