import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'catalog',
  imports: [ProductCard],
  templateUrl: './catalog.html',
})
export class Catalog {

  @Input() products!: Product[];

  @Output() productEventEmitter: EventEmitter<Product> = new EventEmitter();
onAddCart(product: Product){
  this.productEventEmitter.emit(product);
}

}
