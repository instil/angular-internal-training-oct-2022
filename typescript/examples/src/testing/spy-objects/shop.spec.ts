import {Shop} from "./shop";
import {StockService} from "./stock-service";

describe("Shop", () => {
    let target: Shop;
    let stockService: jasmine.SpyObj<StockService>;

    beforeEach(() => {
        stockService = jasmine.createSpyObj(['getQuantity', 'reduceStock']);

        target = new Shop(stockService);
    });

    it('Reduces the stock when purchasing', () => {
        target.purchase('AA', 5);

        expect(stockService.reduceStock).toHaveBeenCalledWith('AA', 5);
    });

    it('Reports it can purchase if there is exactly enough stock', () => {
        stockService.getQuantity
            .withArgs('AA').and.returnValue(6);

        expect(target.canPurchase('AA', 6)).toEqual(true);
    });

    it('Reports it can purchase if there is more than enough stock', () => {
        stockService.getQuantity
            .withArgs('AA').and.returnValue(10);

        expect(target.canPurchase('AA', 6)).toEqual(true);
    });

    it('Reports it cannot purchase if there is not enough stock', () => {
        stockService.getQuantity
            .withArgs('AA').and.returnValue(5);

        expect(target.canPurchase('AA', 6)).toEqual(false);
    });
});
