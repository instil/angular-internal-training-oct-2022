class Node {
  constructor(public next: Node | null,
              public previous: Node | null,
              public item: string) {
  }
}

export class List {
  private _size = 0;
  private first: Node | null = null;

  isEmpty(): boolean {
    return this._size === 0;
  }

  get size(): number {
    return this._size;
  }

  add(item: string): void {
    if (this.isEmpty()) {
      this.first = new Node(null, null, item);
    }
    this._size++;
  }

  get(index: number): string {
    return this.first!.item;
  }
}
