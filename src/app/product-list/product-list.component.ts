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
  }
  
}


