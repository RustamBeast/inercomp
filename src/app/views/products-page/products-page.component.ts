import { Component, OnInit } from '@angular/core';
import { ProductDetails } from 'src/app/entities/product_details';
import { TimeElement } from 'src/app/entities/time_element';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: ProductDetails[] = [
                                {id: 3153,
                                productCode: 'Crude Oil Brent ICE Future M07-2022',
                                description: 'Crude Oil Brent ICE Future',
                                sourceId: 'ICE BRN JUL-2022',
                                dataSource: 'montel',
                                deliveryStart: new Date('2022-07-01T00:00:00+02:00'),
                                deliveryEnd: new Date('2022-08-01T00:00:00+02:00'),
                                tradingStart: null,
                                tradingEnd: new Date('2022-06-01T00:00:00+02:00'),
                                created: new Date('2021-02-15T14:55:56.042949+00:00'),
                                updated: new Date('2022-04-21T09:55:31.791223+00:00'),
                                currency: 'USD',
                                unit: 'BBL',
                                resolution: '1 day',
                                priceType: 'FUTURE',
                                marketArea: 'Brent',
                                exchange: 'ICE',
                                product: 'MONTH',
                                timeZone: 'Europe/Oslo',
                                startDate: new Date('2022-04-01T00:00:00'),
                                endDate: new Date('2022-04-21T00:00:00'),
                                values: [

                                  {validFrom: new Date('2022-04-01T00:00:00+02:00'),
                                  validTo: new Date('2022-04-02T00:00:00+02:00'),
                                  value: 102.82,
                                  low: 100.54,
                                  high: 104.11},

                                  {validFrom: new Date('2022-04-02T00:00:00+02:00'),
                                  validTo: new Date('2022-04-03T00:00:00+02:00'),
                                  value: null,
                                  low: null,
                                  high: null},

                                  {validFrom: new Date('2022-04-03T00:00:00+02:00'),
                                  validTo: new Date('2022-04-04T00:00:00+02:00'),
                                  value: null,
                                  low: null,
                                  high: null},

                                  {validFrom: new Date('2022-04-04T00:00:00+02:00'),
                                  validTo: new Date('2022-04-05T00:00:00+02:00'),
                                  value: 106,
                                  low: 101.4,
                                  high: 107},
                                ]}
                              ];

  constructor() { }

  ngOnInit(): void {
  }

}
