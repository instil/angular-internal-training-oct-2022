function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args: any) {
        console.log("Calling " + propertyKey);
        const result = original(...args);
        console.log("Called " + propertyKey);
        return result;
    };
}

function LogMethodViaFactory(prefix: string) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const original = descriptor.value;
        descriptor.value = function (...args: any) {
            console.log(`${prefix}: ${this.id}: Calling ${propertyKey}`);
            const result = original(...args);
            console.log(`${prefix}: ${this.id}: Called ${propertyKey}`);
            return result;
        };
    };
}

let objectId = 10001;

// eslint-disable-next-line @typescript-eslint/ban-types
function AddId<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        id = objectId++;
    };
}

@AddId
class Math {
    @LogMethod
    add(lhs: number, rhs: number): number {
        return lhs + rhs;
    }

    @LogMethodViaFactory("INFO:")
    subtract(lhs: number, rhs: number): number {
        return lhs - rhs;
    }
}


export function showDecorators() {
    console.log('Object 1 --------------');
    const math1 = new Math();
    console.log(math1.add(1, 2));
    console.log(math1.subtract(3, 4));

    console.log('Object 2 --------------');
    const math2 = new Math();
    console.log(math2.add(1, 2));
    console.log(math2.subtract(3, 4));
}
