export interface StockService {
  getQuantity(code: string): number;

  reduceStock(code: string, quantity: number): void;
}
