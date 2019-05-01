import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

	products: Product[];

  	constructor(private productService: ProductService) { }

  	ngOnInit() {
  		this.products = this.productService.getAll();
  	}

}
