import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product'
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
//import { ItemList} from '../item-list/item-list.component'

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any[] = []

  constructor(private productsService:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts()
    console.log(this.products);

  }

}
