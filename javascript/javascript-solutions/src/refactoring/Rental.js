import {PriceCode} from "./PriceCode";

export class Rental {
  constructor(movie, daysRented) {
    this.movie = movie;
    this.daysRented = daysRented;
  }

  calculateFrequentRenterPoints() {
    return this.isBonusApplicable() ? 2 : 1;
  }

  isBonusApplicable() {
    return this.movie.priceCode === PriceCode.NewRelease && this.daysRented > 1;
  }

  calculateCost() {
    let thisAmount = 0;
    switch (this.movie.priceCode) {
      case PriceCode.Regular:
        thisAmount += 2;
        if (this.daysRented > 2) {
          thisAmount += (this.daysRented - 2) * 1.5;
        }
        break;
      case PriceCode.NewRelease:
        thisAmount += this.daysRented * 3;
        break;
      case PriceCode.Childrens:
        thisAmount += 1.5;
        if (this.daysRented > 3) {
          thisAmount += (this.daysRented - 3) * 1.5;
        }
        break;
      default:
        throw new Error(`Unexpected Price Code ${this.movie.priceCode}`)
    }
    return thisAmount;
  }
}
