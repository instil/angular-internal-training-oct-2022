
const sum = (total, current) => total + current;

export class Customer {
  rentals = [];

  constructor(name) {
    this.name = name;
  }

  addRental(rental) {
    this.rentals.push(rental);
  }

  addRentals(...rentals) {
    this.rentals.push(...rentals);
  }

  statement() {
    const buildHeader = () => `Rental Record for ${this.name}\n`;

    const buildLine = (rental) =>
        `\t${rental.daysRented}\t${rental.movie.title}\t${rental.calculateCost()}\n`;

    const buildFooter = () =>
        `Amount owed is ${totalAmount}\n` +
        `You earned ${frequentRenterPoints} frequent renter points`;

    const totalAmount = this.calculateTotalCost();
    const frequentRenterPoints = this.calculateTotalFrequentRenterPoints();

    let result = buildHeader();
    this.rentals.forEach(x => result += buildLine(x));
    result += buildFooter();
    return result;
  }

  calculateTotalFrequentRenterPoints() {
    return this.rentals
        .map(x => x.calculateFrequentRenterPoints())
        .reduce(sum);
  }

  calculateTotalCost() {
    return this.rentals
        .map(x => x.calculateCost())
        .reduce(sum);
  }
}
