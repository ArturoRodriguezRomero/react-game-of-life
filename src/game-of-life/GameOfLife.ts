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
      const rowIndex = Math.floor(index / this.dimensions.width);
      const columnIndex = index - rowIndex * this.dimensions.width;
      const aliveNeighbors = this.aliveNeighborCount(rowIndex, columnIndex);

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

  private aliveNeighborCount(rowIndex: number, columnIndex: number): number {
    const north = (index: number): Cell => {
      return this.state[
        index < 0
          ? this.dimensions.width * (this.dimensions.height - 1) + columnIndex
          : index
      ];
    };

    const east = (index: number): Cell => {
      return this.state[
        index < rowIndex * this.dimensions.width
          ? this.dimensions.width * rowIndex + 1
          : index
      ];
    };

    const south = (index: number): Cell => {
      return this.state[index >= this.state.length ? columnIndex : index];
    };

    const west = (index: number): Cell => {
      return this.state[
        index < rowIndex * this.dimensions.width
          ? this.dimensions.width * (rowIndex + 1) - 1
          : index
      ];
    };

    const northIndex = (rowIndex - 1) * this.dimensions.width + columnIndex;
    const eastIndex = rowIndex * this.dimensions.width + columnIndex + 1;
    const southIndex = (rowIndex + 1) * this.dimensions.width + columnIndex;
    const westIndex = rowIndex * this.dimensions.width + columnIndex - 1;

    const aliveCount = [
      north(northIndex),
      east(eastIndex),
      south(southIndex),
      west(westIndex),
    ].filter((cell) => cell === Cell.Alive).length;

    return aliveCount;
  }
}
