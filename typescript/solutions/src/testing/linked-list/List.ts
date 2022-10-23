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
        } else {
            const last = this.getLastNode();
            last.next = new Node(null, last, item);
        }
        this._size++;
    }

    get(index: number): string {
        return this.getNodeByIndex(index).item;
    }

    remove(index: number): void {
        const reassignPrevious = () => {
            if (previous) {
                previous.next = next;
            } else {
                this.first = next;
            }
        };

        const reassignNext = () => {
            if (next) {
                next.previous = previous;
            }
        };

        const {previous, next} = this.getNodeByIndex(index);
        reassignPrevious();
        reassignNext();
        this._size--;
    }

    private getLastNode(): Node {
        return this.getNodeByIndex(this.size - 1);
    }

    private getNodeByIndex(index: number): Node {
        if (index < 0 || index >= this.size) throw new Error("Index out of bounds");

        let current = this.first!;
        for (let x = 0; x < index; x++) {
            current = current.next!;
        }
        return current;
    }
}
