import { Component, OnInit } from '@angular/core';
import { Order } from '../orders/order.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  title = 'Create New Order';
  orders: Order[];
  filteredOrders: Order[];
  sortType: string;
  sortReverse = false;

  constructor(
    //private orderService: OrderService,
    //private customerService: CustomerService,
    private router: Router
  ) {}


  ngOnInit(): void {
    /*const ordersData = observableFrom(this.orderService.getOrders());
    observableForkJoin([
      ordersData,
      this.customerService.getCustomers()
    ]).subscribe((data: [Order[], Customer[]]) => {
      this.orders = data[0] as Order[];
      this.customers = data[1] as Customer[];
      this.orders.forEach(order => {
        // tslint:disable-next-line: no-shadowed-variable
        const customer = _.find(this.customers, (customer: { id: number; }) => {
          return order.customerId === customer.id;
        });
        order.customerName = customer.fullName;
      });

      this.filteredOrders = this.orders;
      this.sortOrders('id');
    });*/
  }

  // I used arrow syntax for the below functions,
  // which you shouldn't do because they transpile differently.
  // Everything else is exactly the same.

  goToCreateOrder() {
    this.router.navigate(['/orders/create']);
  }

  sortOrders(property) {
    this.sortType = property;
    this.sortReverse = !this.sortReverse;
    this.filteredOrders.sort(this.dynamicSort(property));
  }

  dynamicSort(property) {
    let sortOrder = -1;

    if (this.sortReverse) { sortOrder = 1; }

    return function(a, b) {
      const result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;

      return result * sortOrder;
    };
  }

  filterOrders(search: string) {
    this.filteredOrders = this.orders.filter(o =>
      Object.keys(o).some(k => {
        if (typeof o[k] === 'string') {
          return o[k].toLowerCase().includes(search.toLowerCase());
        }
      })
    );
  }
}
