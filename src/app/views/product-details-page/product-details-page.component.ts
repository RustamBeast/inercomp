import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/entities/product_details';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  product: ProductDetails | null | undefined;
  error = false;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductById();
  }

  getProductById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.product = this.productService.getProductById(parseInt(id));
    } else {
      this.error = true;
    }
  }

}
