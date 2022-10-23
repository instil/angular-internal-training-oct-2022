export class Movie {
    constructor(title, rating, releaseDate, quotes) {
        this._title = title;
        this._rating = rating;
        this._releaseDate = releaseDate;
        this._quotes = quotes;
    }

    get title() {
        return this._title;
    }

    get rating() {
        return this._rating;
    }

    get releaseDate() {
        return this._releaseDate;
    }

    get quotes() {
        return this._quotes;
    }
}