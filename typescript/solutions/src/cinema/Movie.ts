export class Movie {
    constructor(
        public readonly title: string,
        public readonly rating: string,
        public readonly releaseDate: Date,
        public readonly quotes: string[]
    ) {
    }
}
