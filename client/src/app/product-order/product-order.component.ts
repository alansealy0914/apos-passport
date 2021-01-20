//import { Component, OnInit } from '@angular/core';
import { Component} from '@angular/core';
import {PrintService} from '../print.service';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})
//export class ProductOrderComponent implements OnInit {
  export class ProductOrderComponent {
    agree = false;
    sib = false;

    constructor(public printService: PrintService, /*private router: Router*/) { }
   

    btnClick() {

      alert('Heading over to Service Information Bulletin');
    }


  onPrintInvoice() {
    const invoiceIds = ['101', '102'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }


  

  /*ngOnInit(): void {
  }*/

}
