import { Component, Input } from '@angular/core';
import { CardItem } from '../../models/card-item';

@Component({
  selector: 'cart',
  imports: [],
  templateUrl: './cart.html',

})
export class Cart {

@Input()  items: CardItem[] = [];
}
