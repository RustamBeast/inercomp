import { TimeElement } from "./time_element";

export class ProductDetails {
    constructor(
        public id: number,
        public productCode: string,
        public description: string,
        public sourceId: string,
        public dataSource: string,
        public deliveryStart: Date,
        public deliveryEnd: Date,
        public tradingStart: Date | null,
        public tradingEnd: Date | null,
        public created: Date,
        public updated: Date,
        public currency: string,
        public unit: string,
        public resolution: string,
        public priceType: string,
        public marketArea: string,
        public exchange: string,
        public product: string,
        public timeZone: string,
        public startDate: Date,
        public endDate: Date,
        public values: TimeElement[]
    ) {}
}