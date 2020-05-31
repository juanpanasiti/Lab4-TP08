import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';


@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit {

  product: any
  idProd: string

  constructor(private productsService:ProductService,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.idProd = params['id']
      console.log("ID: " + this.idProd);
      this.product = this.productsService.getProductById(this.idProd);
      console.log(this.product);

    });
  }

}
