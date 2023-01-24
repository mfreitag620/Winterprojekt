import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { ProductTablet } from 'src/productTablet';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {"id": 0, "articleNr": 1, "name": "Pixel 6", "category": "smartphone", "pic":"assets/Pixel-6a-Test.jpg", "price": 899.99, "description": "SamsungTab ist super toll", "count": 0},
    {"id": 1, "articleNr": 2, "name": "Xiaomi", "category": "smartphone", "pic":"assets/Unter250Eurokl-58362e816994acc0.jpg", "price": 699.99, "description": "IPad ist super doll", "count": 0},
    {"id": 2, "articleNr": 3, "name": "Nord 123", "category": "smartphone", "pic":"assets/smartphone_titel_2-1244x830.jpg", "price": 299.99, "description": "Block aus Metall", "count": 0},
  ];

  productTablets: ProductTablet[] = [ 
    {"id": 0, "articleNr": 1, "name": "IPad", "category": "tablet", "pic":"assets/61zdQQORNML._AC_UL480_FMwebp_QL65_ (1).jpg", "price": 899.99, "description": "SamsungTab ist super toll", "count": 0},
    {"id": 1, "articleNr": 2, "name": "Samsung Tab", "category": "tablet", "pic":"assets/71qSWAwzvYS._AC_UY327_FMwebp_QL65_.jpg", "price": 899.99, "description": "IPad ist super doll", "count": 0},
    {"id": 2, "articleNr": 3, "name": "keine Ahnung wie das heißt", "category": "tablet", "pic":"assets/hero_combo__fcqcc3hbzjyy_large.jpg", "price": 299.99, "description": "Block aus Metall", "count": 0},
  ];



  cartProducts: Product[] = [];

  constructor(private httpClient: HttpClient) { }

//tablet Methoden

  getProductTablets(){
    return this.productTablets;
  }

  addProductTablet( productTablet: ProductTablet ){
    this.productTablets.push(productTablet)
  }

  addToCartProductTablet(productTablet: ProductTablet){
    if(this.cartProducts.filter(cartProduct => cartProduct.id === productTablet.id).length === 0 && productTablet.count > 0){
      this.cartProducts.push(productTablet);
    }
  }
  deleteFromCartP(id: number){
    this.cartProducts = this.cartProducts.filter(product => product.id !== id)
  }










  
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
