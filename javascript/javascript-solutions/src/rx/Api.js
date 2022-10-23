import {movieData} from "./Data";
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

export function delay(timeMs) {
    return timer(timeMs);
}


function filteredMovies(search) {
    return movieData
        .filter(x => x.toLowerCase().includes(search.toLowerCase()));
}

// 2. Convert to Observable
export function getCount(search = '') {
    return delay(2000)
        .pipe(map(() => filteredMovies(search).length));
}


// 3. Convert to Observable
export function getPage(index, pageSize, search = '') {
    const start = index * pageSize;
    const end = start + pageSize;
    return delay(1000)
        .pipe(
            map(() => {
                const movies = filteredMovies(search);
                if (start < 0 || start > movies.length - 1) {
                    throw "Request is out of range";
                }
                return movies.slice(start, Math.min(end, movies.length));
            }));
}

