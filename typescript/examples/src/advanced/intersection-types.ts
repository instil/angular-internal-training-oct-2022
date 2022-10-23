import {Mammal, Oviparous, platypus} from "./animals";

export type Platypus = Mammal & Oviparous;

const creature: Platypus = platypus;

type Individual = {
  think: (topic: string) => string,
  feel: (emotion: string) => void
};

type Machine = {
    charge: (amount: number) => void,
    work: (task: string) => boolean
};

type Cylon = Individual & Machine;

const boomer: Cylon = {
    charge(amount: number): void {
    },

    feel(emotion: string): void {
    },

    think(topic: string): string {
        return "Kill all humans!";
    },

    work(task: string): boolean {
        return false;
    }
};

export function showIntersectionTypes() {
    console.log(creature.name);
    creature.produceMilk();
    creature.layEggs();

    console.log(boomer.think("poetry"));
}
