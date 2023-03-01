import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  //後綴字詞!，代表無視此product需初始化之規則
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
