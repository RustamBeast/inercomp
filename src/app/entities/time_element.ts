export class TimeElement {
    constructor(
        public validFrom: Date,
        public validTo: Date,
        public value: number | null,
        public low: number | null,
        public high: number | null
    ) {}
}