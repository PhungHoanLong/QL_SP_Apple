import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Input number
    var $this = $('.input-number'),
      $input = $this.find('input[type="number"]'),
      up = $this.find('.qty-up'),
      down = $this.find('.qty-down');

    down.on('click', function () {
      var value = Number($input.val()) - 1;
      value = value < 1 ? 1 : value;
      $input.val(value);
    })

    up.on('click', function () {
      var value = Number($input.val()) + 1;
      $input.val(value);
    });
  }

  // Slides Product
  slidesMain = [
    { img: "assets/img/product01.png" },
    { img: "assets/img/product03.png" },
    { img: "assets/img/product06.png" },
    { img: "assets/img/product08.png" }
  ];

  // Product Main img Slick
  slideMain = {
    infinite: true,
    speed: 300,
    dots: false,
    arrows: true,
    fade: true,
    asNavFor: '#product-imgs'
  }

  // Product imgs Slick
  slideImg = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: 0,
    vertical: true,
    asNavFor: '#product-main-img',
    responsive: [{
      breakpoint: 991,
      settings: {
        vertical: false,
        arrows: false,
        dots: true,
      }
    },
    ]
  }

}
