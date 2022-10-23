import {movieData} from "./Data";
import {Observable, timer} from 'rxjs';
import {map} from 'rxjs/operators';

export function delay(timeMs: number): Observable<number> {
    return timer(timeMs);
}


function filteredMovies(search: string): string[] {
    return movieData
        .filter(x => x.toLowerCase().includes(search.toLowerCase()));
}

// 2. Convert to Observable
export function getCount(search = ''): Observable<number> {
    return delay(2000)
        .pipe(map(() => filteredMovies(search).length));
}


// 3. Convert to Observable
export function getPage(index: number, pageSize: number, search = ''): Observable<string[]> {
    const start = index * pageSize;
    const end = start + pageSize;
    return delay(1000)
        .pipe(
            map(() => {
                const movies = filteredMovies(search);
                if (start < 0 || start > movies.length - 1) {
                    throw Error("Request is out of range");
                }
                return movies.slice(start, Math.min(end, movies.length));
            }));
}

