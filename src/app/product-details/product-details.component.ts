import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    console.log(`routeParams: ${JSON.stringify(routeParams)}`);
    /* routeParams內容 => {"params": {
      "productId": "1"
    }} */
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('add product to cart successfully.');
  }
}
