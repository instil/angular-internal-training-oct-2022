export class Customer {
  constructor(name) {
    this.name = name;
    this.rentals = [];
  }

  addRental(rental) {
    this.rentals.push(rental);
  }

  statement() {
    let totalAmount = 0;
    let frequentRenterPoints = 0;
    let result = '';
    // add header lines
    result += '\nRental Record for ';
    result += this.name;
    result += '\n';
    for (let x = 0; x < this.rentals.length; x++) {
      let rental = this.rentals[x];
      // determine cost
      let thisAmount = 0;
      switch (rental.movie.priceCode) {
        case 'REGULAR':
          thisAmount += 2;
          if (rental.daysRented > 2) {
            thisAmount += (rental.daysRented - 2) * 1.5;
          }
          break;
        case 'NEW_RELEASE':
          thisAmount += rental.daysRented * 3;
          break;
        case 'CHILDRENS':
          thisAmount += 1.5;
          if (rental.daysRented > 3) {
            thisAmount += (rental.daysRented - 3) * 1.5;
          }
          break;
      }
      // determine points
      if ((rental.movie.priceCode === 'NEW_RELEASE') && rental.daysRented > 1) {
        frequentRenterPoints += 2;
      } else {
        frequentRenterPoints += 1;
      }
      // show figures for this rental
      result += '\t';
      result += rental.daysRented;
      result += '\t';
      result += rental.movie.title;
      result += '\t';
      result += thisAmount;
      result += '\n';
      // add cost of this rental to total cost
      totalAmount += thisAmount;
    }
    // add footer lines
    result += 'Amount owed is ';
    result += totalAmount;
    result += '\n';
    result += 'You earned ';
    result += frequentRenterPoints;
    result += ' frequent renter points\n';
    return result.toString();
  }
}
