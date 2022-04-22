import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: ProductDetails | null | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
