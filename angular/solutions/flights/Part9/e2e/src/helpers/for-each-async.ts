export {};

declare global {
  interface Array<T> {
    forEachAsync(action: (item: T, index: number) => Promise<void>): Promise<Array<T>>;
  }
}

Array.prototype.forEachAsync = async function forEachAsync<T>(action: (item: T, index: number) => Promise<void>): Promise<Array<T>> {
  let index = 0;
  for (const item of this) {
    await action(item, index++);
  }

  return this;
};
