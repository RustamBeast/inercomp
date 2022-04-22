export class Element {
    constructor(
        public validFrom: Date,
        public validTo: Date,
        public value: number,
        public low: number,
        public high: number
    ) {}
}