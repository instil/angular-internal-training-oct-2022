import {PriceCode} from "./PriceCode";
import {Movie} from "./Movie";

export class Rental {
    constructor(public readonly movie: Movie, public readonly daysRented: number) {
    }

    get frequentRenterPoints(): number {
        return this.isBonusApplicable() ? 2 : 1;
    }

    isBonusApplicable(): boolean {
        return this.movie.priceCode === PriceCode.NewRelease && this.daysRented > 1;
    }

    get cost(): number {
        switch (this.movie.priceCode) {
            case PriceCode.Regular:
                return 2 + this.addSurcharge(2);
            case PriceCode.NewRelease:
                return this.daysRented * 3;
            case PriceCode.Childrens:
                return 1.5 + this.addSurcharge(3);
        }
    }

    private addSurcharge(daysThreshold: number) {
        if (this.daysRented <= daysThreshold) return 0;

        return (this.daysRented - daysThreshold) * 1.5;
    }
}
