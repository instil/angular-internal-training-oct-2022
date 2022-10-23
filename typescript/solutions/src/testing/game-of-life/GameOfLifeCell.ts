export type CellState = 'dead' | 'alive';

export class GameOfLifeCell {
  private _state: CellState = 'dead';

  constructor(private neighbours: GameOfLifeCell[]) {
    const numNeighbours = neighbours.length;
    if (numNeighbours > 8) {
      throw new Error('Too many neighbours');
    }
  }

  makeDead(): void {
    this._state = 'dead';
  }

  get state(): CellState {
    return this._state;
  }

  changeState(): void {
    const aliveNeighbourCount = this.neighbours
      .filter(x => x.state === 'alive')
      .length;

    if (this._state === 'dead' && aliveNeighbourCount === 3) {
      this.makeAlive();
    } else if (this._state === 'alive' &&
      (aliveNeighbourCount > 3 || aliveNeighbourCount < 2)) {
      this.makeDead();
    }
  }

  toString(): string {
    return 'A Game Of Life Cell';
  }

  makeAlive(): void {
    this._state = 'alive';
  }

  getStateAsync(): Promise<CellState> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.state), 1000);
    });
  }
}
