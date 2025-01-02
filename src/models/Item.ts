export class Item {
    item_code: string;
    description: string;
    qty:string;
    price:string;

    constructor(item_code: string, description: string, qty: string,price:string) {
        this.item_code = item_code;
        this.description = description;
        this.qty = qty;
        this.price = price;
    }
}