export enum Cell {
  Alive = "Alive",
  Dead = "Dead",
}

export type State = Cell[];
type Dimensions = { width: number; height: number };

export class GameOfLife {
  public dimensions: Dimensions;
  public state: State;

  private constructor(state: State, dimensions: Dimensions) {
    this.state = state;
    this.dimensions = dimensions;
  }

  public static new(width: number, height: number, initial: State): GameOfLife {
    if (initial.length < width * height) {
      throw new Error("Invalid initial State");
    }

    return new GameOfLife(initial, { width, height });
  }

  public tick(): void {
    let newState = this.state.map((cell, index) => {
      const aliveNeighbors = this.aliveNeighborCount(index);

      if (cell === Cell.Alive) {
        if (aliveNeighbors < 2) return Cell.Dead;
        if (aliveNeighbors === 2 || aliveNeighbors === 3) return Cell.Alive;
        if (aliveNeighbors > 3) return Cell.Dead;
      } else if (cell === Cell.Dead) {
        if (aliveNeighbors === 3) return Cell.Alive;
      }

      return cell;
    });

    this.state = newState;
  }

  private aliveNeighborCount(index: number): number {
    let count = 0;
    const row = Math.floor(index / this.dimensions.width);
    const column = index - row * this.dimensions.width;

    for (let deltaRow of [this.dimensions.height - 1, 0, 1]) {
      for (let deltaCol of [this.dimensions.width - 1, 0, 1]) {
        if (deltaRow === 0 && deltaCol === 0) {
          continue;
        }

        const neighbor_row = (row + deltaRow) % this.dimensions.height;
        const neighbor_col = (column + deltaCol) % this.dimensions.width;
        const index = neighbor_row * this.dimensions.width + neighbor_col;
        count += this.state[index] === Cell.Alive ? 1 : 0;
      }
    }

    return count;
  }
}
