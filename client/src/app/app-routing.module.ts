import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ProfileComponent } from "./profile/profile.component";

import {InvoiceComponent} from './invoice/invoice.component';
import {PrintLayoutComponent} from './print-layout/print-layout.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { OrderHistoryComponent } from './order-history/order-history.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "order-history", component: OrderHistoryComponent, canActivate: [AuthGuard] },
  { path: "product-order", component: ProductOrderComponent, canActivate: [AuthGuard] },
  { path: 'print',
    outlet: 'print',
    component: PrintLayoutComponent,
    children: [
      { path: 'invoice/:invoiceIds', component: InvoiceComponent }
    ]
  },
  { path: "create-order", component: CreateOrderComponent, canActivate: [AuthGuard] },
  { path: "products", component: ProductsComponent},
  //{ path: "product-order", component: ProductOrderComponent}
  //{ path: "products", component: ProductsComponent , canActivate: [AuthGuard] },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
