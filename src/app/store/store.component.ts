import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import * as $ from 'jquery';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent implements OnInit {
  
  collection = [
    { img: "assets/img/product01.png" },
    { img: "assets/img/product03.png" },
    { img: "assets/img/product04.png" },
    { img: "assets/img/product05.png" },
    { img: "assets/img/product02.png" },
    { img: "assets/img/product08.png" }
  ];

  config = {
    itemsPerPage: 1,
    currentPage: 1,
    totalItems: this.collection.length
  };

  pageChanged(event: any){
    this.config.currentPage = event;
  }

  // Price Slider
  minValue = 0;
  maxValue = 1000;
  //-------------------------------------------
  updatePriceSlider() {
    var elem = $('.input-number');
    if (elem.hasClass('price-min')) {
      this.minValue = Number(elem[0].getElementsByTagName('input')[0].value);
    }
    if (elem.hasClass('price-max')) {
      this.maxValue = Number(elem[1].getElementsByTagName('input')[0].value);
    }
  }
  //-------------------------------------------
  updateMin() {
    $('#price-min').val(this.minValue);
  }
  //-------------------------------------------
  updateMax() {
    $('#price-max').val(this.maxValue);
  }
  //-------------------------------------------
  options: Options = {
    floor: 0,
    ceil: 1000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>Min price:</b> $" + value;
        case LabelType.High:
          return "<b>Max price:</b> $" + value;
        default:
          return "$" + value;
      }
    }
  };
  //-------------------------------------------
  constructor() { }
  //-------------------------------------------
  ngOnInit(): void {
    // Input number
    $('.input-number').each(function () {
      var $this = $(this),
        $input = $this.find('input[type="number"]'),
        up = $this.find('.qty-up'),
        down = $this.find('.qty-down');
      //-------------------------------------------
      down.on('click', function () {
        var value = Number($input.val()) - 1;
        value = value < 0 ? 0 : value;
        $input.val(value);
      })
      //-------------------------------------------
      up.on('click', function () {
        var value = Number($input.val()) + 1;
        value = value > 1000 ? 1000 : value;
        $input.val(value);
        console.log();
        // store.updatePriceSlider($this, value);
      })
    });
  }
}
