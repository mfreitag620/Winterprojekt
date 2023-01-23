import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

    products: Product[] = []

  constructor(private productSevice: ProductService) { }

  ngOnInit(): void {
    this.products = this.productSevice.getProducts();
  }

  deleteProduct(id: number){
    this.productSevice.deleteProduct(id)
    this.products = this.productSevice.getProducts();
  }
  addToCart(product: Product){
    this.productSevice.addToCart(product);
    var x = document.getElementById("snackbar");
    if(x && product.count > 0){
      x.className = "show";
      setTimeout(function(){ x!.className = x!.className.replace("show", ""); }, 3000);
    }
  }
}
