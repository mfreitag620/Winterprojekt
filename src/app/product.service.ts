import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {"id": 0, "articleNr": 1, "name": "SamsungTab", "category": "", "pic":"assets/61zdQQORNML._AC_UL480_FMwebp_QL65_ (1).jpg", "price": 899.99, "description": "SamsungTab ist super toll", "count": 0},
    {"id": 1, "articleNr": 2, "name": "IPad", "category": "", "pic":"assets/71qSWAwzvYS._AC_UY327_FMwebp_QL65_.jpg", "price": 899.99, "description": "IPad ist super doll", "count": 0},
    {"id": 2, "articleNr": 3, "name": "keine Ahnung wie das heißt", "category": "", "pic":"assets/hero_combo__fcqcc3hbzjyy_large.jpg", "price": 299.99, "description": "Block aus Metall", "count": 0},
    
  ];

  cartProducts: Product[] = [];

  constructor(private httpClient: HttpClient) { }
  
  getProducts(){
    return this.products;
  }

  addProduct(product: Product){
    this.products.push(product);
  }

  deleteProduct(id: number){
    this.products = this.products.filter(product => product.id !== id)
  }
  addToCart(product: Product){
    if(this.cartProducts.filter(cartProduct => cartProduct.id === product.id).length === 0 && product.count > 0){
      this.cartProducts.push(product);
    }
  }
  deleteFromCart(id: number){
    this.cartProducts = this.cartProducts.filter(product => product.id !== id)
  }

  getCartProducts(){
    return this.cartProducts;
  }


}
