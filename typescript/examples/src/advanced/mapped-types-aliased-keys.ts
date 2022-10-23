interface UserData {
    name: string;
    age: number;
    registered: boolean;
}

// Produces:
// type UserDataAccessors = {
//     getName: () => string;
//     getAge: () => number;
//     getRegistered: () => boolean;
// }
export type UserDataAccessors = {
    [K in keyof UserData as `get${Capitalize<K>}`]: () => UserData[K];
}

class UserDataJava implements UserDataAccessors {
    constructor(private userData: UserData) {
    }

    getAge(): number {
        return this.userData.age;
    }

    getName(): string {
        return this.userData.name;
    }

    getRegistered(): UserData["registered"] {
        return this.userData.registered;
    }
}

export function showMappedTypeWithAliasedKeys() {
    const userData: UserData = {
        name: "John Doe",
        age: 21,
        registered: true
    };

    const javaWrapper = new UserDataJava(userData);
    console.log(`Name: ${javaWrapper.getName()}`);
    console.log(`Age: ${javaWrapper.getAge()}`);
    console.log(`Registered: ${javaWrapper.getRegistered()}`);
}
