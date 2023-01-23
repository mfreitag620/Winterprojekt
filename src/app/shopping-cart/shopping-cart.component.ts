import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  products: Product[] = [];

  sum: number = 0;

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.getCartProducts();
    this.refreshSumPrice();
  }

  deleteFromCart(id: number){
    this.productService.deleteFromCart(id);
    this.products = this.productService.getCartProducts();
    this.refreshSumPrice();
  }

  refreshSumPrice(){
    this.sum = 0;
    this.products.forEach(element => {
      this.sum += element.price*element.count
    });
    this.sum = Math.round(this.sum*100)/100
  }

}
