import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Slide Product
  //-------------------------------------------
  // New Products
  slidesNewProducts = [
    { img: "assets/img/product01.png" },
    { img: "assets/img/product03.png" },
    { img: "assets/img/product04.png" },
    { img: "assets/img/product05.png" },
    { img: "assets/img/product02.png" }
  ];
  //-------------------------------------------
  // Top Selling Products
  slidesTopSell = [
    { img: "assets/img/product09.png" },
    { img: "assets/img/product08.png" },
    { img: "assets/img/product07.png" },
    { img: "assets/img/product06.png" },
    { img: "assets/img/product05.png" }
  ];
  //-------------------------------------------
  // Products Slick
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    speed: 500,
    dots: false,
    arrows: true,
    appendArrows: false,
    responsive: [{
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
  };
  //-------------------------------------------
  // Products Widget Slick
  slideWidget = {
    infinite: true,
    autoplay: true,
    speed: 500,
    dots: false,
    arrows: true,
    appendArrows: false
  }
}
