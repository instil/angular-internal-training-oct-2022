class Centimetres {
    constructor(public amount: number) {}
    public inMetres(): number {
        return this.amount / 100;
    }
}

class Inches {
    constructor(public amount: number) {}
    public inYards(): number {
        return this.amount / 36;
    }
}

type CentimetresOrInches = Centimetres | Inches;
type CentimetresOrInchesToggle<T extends CentimetresOrInches> = T extends Centimetres ? Inches : Centimetres;

// This is a simple example to show the concept. In reality we would use overloading.
function convert<T extends CentimetresOrInches>(input: T): CentimetresOrInchesToggle<T> {
     if (input instanceof Centimetres) {
         const inches = new Inches(input.amount / 2.54);
         return inches as CentimetresOrInchesToggle<T>;
     }
     const centimetres = new Centimetres(input.amount * 2.54);
     return centimetres as CentimetresOrInchesToggle<T>;
}

export function showManagingReturnTypes() {
    const data1 = new Centimetres(1000);
    const data2 = new Inches(1000);

    // Input was Centimetre so output is Inches
    const result1 = convert(data1).inYards();
    // Input was Inches so output is Centimetres
    const result2 = convert(data2).inMetres();

    console.log("1000 centimetres is", result1.toFixed(2), "yards");
    console.log("1000 inches is", result2.toFixed(2), "metres");
}

