import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../common/cartItem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  product: Product = {
    id: "1",
    name: "Hermes Birkin",
    description: `
    Embrace timeless elegance with our Hermes Birkin 30 cm handbag, crafted in luxurious orange Sanguine ostrich leather. 
    Elevate your style with the epitome of sophistication and fashion-forward allure.
    `,
    unitPrice: 50,
    imageUrl: "../assets/images/products/prod11.png",
    active: true,
    unitsInStock: 100
  };

  products!: Product[];

  constructor(private cartService: CartService) {
    this.products = [];
    for (let i=0; i<4; i++) {
      this.products.push(this.product);
    }
  }
  
  addToCart() {
    const theCartItem: CartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}
