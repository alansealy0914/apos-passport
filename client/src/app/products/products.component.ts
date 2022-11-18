import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Product List';
  constructor(private router: Router,
    private primengConfig: PrimeNGConfig ) { }

  goToCreateOrder() {
    this.router.navigate(['/orders/create']);
  }
  ngOnInit(): void {
  }

}
