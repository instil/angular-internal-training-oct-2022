export type Mammal = {
    name: string;
    produceMilk(): void;
}

export type Oviparous = {
    name: string;
    layEggs(): void;
}

export class Cow {
    name = "Cow";

    produceMilk() {
        console.log("Producing milk");
    }
}

export const cow = new Cow();

export const chicken = {
    name: 'Chicken',
    layEggs: () => {
        console.log("Laying eggs");
    }
};

export const platypus = {
    name: 'Platypus',
    produceMilk: () => {
        console.log("Producing Milk");
    },
    layEggs: () => {
        console.log("Laying eggs");
    }
};
