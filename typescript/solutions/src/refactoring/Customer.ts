import {Rental} from "./Rental";

export class Customer {
    private rentals: Rental[] = [];

    constructor(public readonly name: string) {
    }

    addRentals(...rentals: Rental[]): void {
        this.rentals.push(...rentals);
    }

    private sumRentalsBy(transform: (_: Rental) => number): number {
        const sum = (total: number, current: number) => total + current;
        return this.rentals.map(transform).reduce(sum);
    }

    statement() {
        const totalAmount = this.sumRentalsBy(x => x.cost);
        const totalPoints = this.sumRentalsBy(x => x.frequentRenterPoints);
        const buildLine = ({daysRented, movie: {title}, cost}: Rental) => `\t${daysRented}\t${title}\t${cost}\n`;

        const header = `Rental Record for ${this.name}\n`;
        const lines = this.rentals.map(buildLine).join("");
        const footer1 = `Amount owed is ${totalAmount}\n`
        const footer2 = `You earned ${totalPoints} frequent renter points`;
        
        return header + lines + footer1 + footer2
    }
}
