import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductTablet } from 'src/productTablet';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {

    productTablets: ProductTablet[] = []



  constructor(private productServicec: ProductService) { }

  ngOnInit(): void {
    this.productTablets = this.productServicec.getProductTablets();
  }

  addToCart(productTablet: ProductTablet){
    this.productServicec.addProductTablet(productTablet);
    var x = document.getElementById("snackbar");
    if(x && productTablet.count > 0){
      x.className = "show";
      setTimeout(function(){ x!.className = x!.className.replace("show", ""); }, 3000);
    }
  }
}
