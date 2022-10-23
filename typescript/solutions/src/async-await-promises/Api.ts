import {movieData} from "./Data";

// Do not convert this function
export function delay(timeMs: number): Promise<void> {
    return new Promise(
        (resolve) => setTimeout(() => resolve(), timeMs)
    );
}

export async function getCount(): Promise<number> {
    await delay(2000);
    return movieData.length;
}

export async function getPage(index: number, pageSize: number): Promise<string[]> {
    let start = index * pageSize;
    let end = start + pageSize;
    await delay(1000);

    if (start < 0 || start > movieData.length - 1) {
        throw Error('Page out of range');
    }

    return movieData.slice(start, Math.min(end, movieData.length));
}

