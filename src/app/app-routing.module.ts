import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { ProductsComponent } from './components/products/products.component';
import { ShowProductComponent } from './components/show-product/show-product.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'location', component: LocationComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'show/:id', component: ShowProductComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
