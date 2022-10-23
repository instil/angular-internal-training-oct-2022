export {};

declare global {
  interface Array<T> {
    mapAsync(transform: (item: T, index?: number) => Promise<T>): Promise<Array<T>>;
  }
}

Array.prototype.mapAsync = async function mapAsync<T>(transform: (item: T, index?: number) => Promise<T>): Promise<Array<T>> {
  let index = 0;
  const result = [];
  for (const item of this) {
    result.push(await transform(item, index++));
  }

  return result;
};
