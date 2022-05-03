import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Create QR Code by choose payment 
    $(".payment-method div").on('click', function () {
      $(".code img").attr('src', "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + (<HTMLInputElement>$('.input-radio')[$(this).index()]?.querySelector('input[name="payment"]')).value);
    });
  }

}
