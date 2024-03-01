import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../common/product';
import { CartItem } from '../../common/cartItem';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  
  smallImages: string[] = [
    '../assets/images/products/prod11.png',
    '../assets/images/products/prod12.png',
    '../assets/images/products/prod13.png',
    '../assets/images/products/prod14.png'
  ];

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

  constructor(private router: Router, private cartService: CartService) {
    this.products = [];
    for (let i=0; i<4; i++) {
      this.products.push(this.product);
    }
   }

  ngOnInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit() {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 0);
    });
  }


  changeProductImage(index: number) {
    this.product.imageUrl = this.smallImages[index];
  }

  addToCart() {
    const theCartItem: CartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }

}
