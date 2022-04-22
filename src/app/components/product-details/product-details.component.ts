import { Component, Input, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @Input() product: ProductDetails | null | undefined;
  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  getNormalDate(date: string) {
    return date.split('.')[0].split('T')[0] + ' at ' + date.split('.')[0].split('T')[1];
  }

}
