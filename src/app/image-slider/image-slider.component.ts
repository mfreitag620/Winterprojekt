import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {

  slides = [
    {url:'assets/iphone12_pro_3.jpg', title: 'Iphone 12'},
    {url:'assets/hero_combo__fcqcc3hbzjyy_large.jpg', title: 'Iphone 12'},
    {url:'assets/Beoplay-H4-1.jpg', title: 'Iphone 12'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
