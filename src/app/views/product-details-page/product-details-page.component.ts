import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  product: ProductDetails | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
