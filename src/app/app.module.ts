import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ShowProductComponent } from './components/show-product/show-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    LocationComponent,
    NavbarComponent,
    ItemListComponent,
    ShowProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
