import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';
import { TimeElement } from 'src/app/entities/time_element';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDetails[] | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
