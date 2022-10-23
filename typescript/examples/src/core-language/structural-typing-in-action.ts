interface Movie {
    id: number;
    title: string;
    year: number;
}

type Policy = {
    id: number;
    quote: number;
}

class Request {
    constructor(
        public id: string,
        public method: string,
        public body: any,
    ) {
    }
}

const policies: Policy[] = [
    {id: 1, quote: 2000},
    {id: 2, quote: 5000},
    {id: 3, quote: 1000},
];
const movies: Movie[] = [
    {id: 1111, title: "The Matrix", year: 1999},
    {id: 2222, title: "Predator", year: 1984},
    {id: 3333, title: "Dune", year: 2021},
];
const requests: Request[] = [
    {id: "ABC123", method: "POST", body: "This is a request"},
    {id: "DEF456", method: "PUT", body: "This is another request"},
    {id: "GHI789", method: "PATCH", body: "This is the last request"},
];

function version1SpecificImplementations() {
    function hasMovieId(id: number): (_: Movie) => boolean {
        return movie => movie.id === id;
    }

    function hasPolicyId(id: number): (_: Policy) => boolean {
        return policy => policy.id === id;
    }

    function hasRequestId(id: string): (_: Request) => boolean {
        return request => request.id === id;
    }

    const foundPolicy = policies.find(hasPolicyId(1));
    const foundMovie = movies.find(hasMovieId(1111));
    const foundRequest = requests.find(hasRequestId("ABC123"));

    console.log("-- Version 1 - specific implementation");
    console.log(foundMovie);
    console.log(foundPolicy);
    console.log(foundRequest);
}

function version2StructuralTypingHigherOrderFunction() {
    interface IdType {
        id: number;
    }

    function hasId(id: number): (_: IdType) => boolean {
        return obj => obj.id === id;
    }

    const foundPolicy = policies.find(hasId(2));
    const foundMovie = movies.find(hasId(2222));
    console.log("-- Version 2 - Structural Typing to New Interface");
    console.log(foundMovie);
    console.log(foundPolicy);
}

function version3AddingGenerics() {
    type IdOfT<T> = {
        id: T
    };

    function hasIdOfT<T>(id: T): (_: IdOfT<T>) => boolean {
        return obj => obj.id === id;
    }

    const foundPolicy = policies.find(hasIdOfT(3));
    const foundMovie = movies.find(hasIdOfT(3333));
    const foundRequest = requests.find(hasIdOfT("GHI789"));

    console.log("-- Version 3 - adding generics");
    console.log(foundMovie);
    console.log(foundPolicy);
    console.log(foundRequest);
}

export function structuralTypingInAction() {
    version1SpecificImplementations();
    version2StructuralTypingHigherOrderFunction();
    version3AddingGenerics();
}
