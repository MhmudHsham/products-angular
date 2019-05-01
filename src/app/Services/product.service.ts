import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

	private products: Product[];

  	constructor() { 
  		this.products = [
  			{id: 1, title: "Product 1", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 2", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 3", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 4", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 5", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 6", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 7", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  			{id: 1, title: "Product 8", price: 300, discount: 10, image: ["./assets/img/products/product-grey-1.jpg"]},
  		];
  	}

  	getAll(): Product[] {
  		return this.products;
  	}


}
