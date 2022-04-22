import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductDetails[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
