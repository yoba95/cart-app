import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'div[product-card]',
  imports: [],
  templateUrl: './product-card.html',

})
export class ProductCard {

  @Input() product!: Product;
}
