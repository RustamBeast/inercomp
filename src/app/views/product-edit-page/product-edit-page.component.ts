import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/entities/product_details';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit-page',
  templateUrl: './product-edit-page.component.html',
  styleUrls: ['./product-edit-page.component.scss']
})
export class ProductEditPageComponent implements OnInit {

  success = false;
  error = false;
  product: ProductDetails | undefined | null;
  productForm: FormGroup;
  selectedCurrency: string | undefined;
  currencies = ['USD', 'EUR', 'JPY', 'GBP', 'CAD'];

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: ActivatedRoute) {
    this.getProductById();
    this.productForm = this.formBuilder.group({
      description: [this.product ? this.product.description : ''],
      deliveryStart: [this.product ? formatDate(this.product.deliveryStart, 'yyyy-MM-dd', 'en') : '', [Validators.required]],
      deliveryEnd: [this.product ? formatDate(this.product.deliveryEnd, 'yyyy-MM-dd', 'en') : '', [Validators.required]],
      tradingStart: [this.product && this.product.tradingStart ? formatDate(this.product.tradingStart, 'yyyy-MM-dd', 'en') : ''],
      tradingEnd: [this.product && this.product.tradingEnd ? formatDate(this.product.tradingEnd, 'yyyy-MM-dd', 'en') : ''],
      currency: [this.product ? this.product.currency : '', [Validators.required]],
      unit: [this.product ? this.product.unit : '', [Validators.required]],
      resolution: [this.product ? this.product.resolution : '', [Validators.required]],
      priceType: [this.product ? this.product.priceType : '', [Validators.required]],
      marketArea: [this.product ? this.product.marketArea : '', [Validators.required]],
      exchange: [this.product ? this.product.exchange : '', [Validators.required]],
      product: [this.product ? this.product.product : '', [Validators.required]],
      timeZone: [this.product ? this.product.timeZone : '', [Validators.required]],
      startDate: [this.product ? formatDate(this.product.startDate, 'yyyy-MM-dd', 'en') : '', [Validators.required]],
      endDate: [this.product ? formatDate(this.product.endDate, 'yyyy-MM-dd', 'en') : '', [Validators.required]]
    });
   }

  ngOnInit(): void {
    console.log(this.productForm);
  }

  getProductById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.product = this.productService.getProductById(parseInt(id));
    } else {
      this.error = true;
    }
  }

  updateProduct() {
    console.log(this.productForm);
    if (this.productForm.valid && this.product) {
      this.productService.updateProduct(new ProductDetails(this.product.id,
                                        this.product.productCode,
                                        this.productForm.controls['description'].value,
                                        this.product.sourceId,
                                        this.product.dataSource,
                                        this.productForm.controls['deliveryStart'].value,
                                        this.productForm.controls['deliveryEnd'].value,
                                        this.productForm.controls['tradingStart'].value,
                                        this.productForm.controls['tradingEnd'].value,
                                        this.product.created,
                                        new Date(),
                                        this.productForm.controls['currency'].value,
                                        this.productForm.controls['unit'].value,
                                        this.productForm.controls['resolution'].value,
                                        this.productForm.controls['priceType'].value,
                                        this.productForm.controls['marketArea'].value,
                                        this.productForm.controls['exchange'].value,
                                        this.productForm.controls['product'].value,
                                        this.productForm.controls['timeZone'].value,
                                        this.productForm.controls['startDate'].value,
                                        this.productForm.controls['endDate'].value,
                                        this.product.values));
    }
    this.success = true;
  }

}
