import { Injectable } from '@angular/core';
import * as data from 'src/assets/data/instrumentos.json'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsFile:any = (data as any).default
  constructor() {
    console.log("Servicio de productos cargado");
    console.log(this.productsFile);
  }//Constructor

  //listar todos
  public getProducts():any[]{
    return this.productsFile.instrumentos
    console.log(this.productsFile);
  }//getProducts()

  public getProductById(prodId:string):any{
    for(let product of this.productsFile.instrumentos){
      if(product.id == prodId){
        return product
      }
    }
  }//getProductById()

  public findProduct(term:string):any[]{
    let products:any[] = []
    term = term.toLowerCase()
    for(let product of this.productsFile){
      let instrumento = product.instrumento.toLowerCase()
      if(instrumento.indexOf(term) >= 0){
        products.push(product)
      }
    }
    return products
  }//findProducts()

}
