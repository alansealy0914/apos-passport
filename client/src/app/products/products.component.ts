import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title = 'Product List';
  constructor(private router: Router) { }

  goToCreateOrder() {
    this.router.navigate(['/orders/create']);
  }
  ngOnInit(): void {
  }

}
