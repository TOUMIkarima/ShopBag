import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { CartItem } from '../../common/cartItem';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  menuHeight: string = '0px'; 

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
    for (let i=0; i<12; i++) {
      this.products.push(this.product);
    }
  }

  menuToggle() : void {
    this.menuHeight = this.menuHeight === '0px' ? '200px' : '0px';
  }

  addToCart() {
    const theCartItem: CartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}
