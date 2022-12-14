import { Component, OnInit } from '@angular/core';

import productData from '../product.json';
interface Product {
  id: Number;
  category: String;
  productName: String;
  price: number;   
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

   products: Product[] = [];

  ngOnInit(): void {
    this.products = productData.filter(product => product.category === "smartphone");
  };

  sayHello(){
    console.log("Hello From me");
  }
  higlightBGcolor(a:number, b:number, c:number){
    console.log("highlighted"+a+b+c);
  }
  inputBox(){
    console.log("input");
  }

}


