import {StockService} from "./stock-service";

export class Shop {
    constructor(private stockService: StockService) {
    }

    canPurchase(code: string, quantity: number): boolean {
        return this.stockService.getQuantity(code) >= quantity;
    }

    purchase(code: string, quantity: number): void {
        this.stockService.reduceStock(code, quantity);
    }
}
