import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { Catalog } from './catalog/catalog';
import { Cart } from './cart/cart';
import { CardItem } from '../models/card-item';

@Component({
  selector: 'cart-app',
  imports: [Catalog, Cart],
  templateUrl: './cart-app.html',
})
export class CartApp  implements OnInit{

  products: Product[] = [];

  items: CardItem[] = [];

  /*
  Aqui se hace una inyeccion de dependencia al servicio de Product service
  */
  constructor(private service: ProductService){

  }
  ngOnInit(): void {
    this.products = this.service.findAll();
  }


  onAddCart(product: Product){
this.items=[... this.items, {product: {...product}, quantity: 1}];
  }


}
