import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: ProductDetails | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
