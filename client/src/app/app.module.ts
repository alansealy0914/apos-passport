import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { InvoiceComponent } from './invoice/invoice.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    OrderHistoryComponent,
    ProductOrderComponent,
    InvoiceComponent,
    PrintLayoutComponent,
    CreateOrderComponent,
    OrdersComponent,
    ProductsComponent,
    
    
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule, 
    HttpClientModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
