import { State, Cell, GameOfLife } from "./GameOfLife";

export function stringToGameState(...string: String[]): State {
  return string
    .join("")
    .split("")
    .map((value) => (value === "*" ? Cell.Alive : Cell.Dead));
}

export function gameToString(game: GameOfLife): String[] {
  return chunkArray([...game.state], game.dimensions.width).map((row) =>
    row.map((cell) => (cell === Cell.Alive ? "*" : "·")).join("")
  );
}

function chunkArray<T>(array: T[], size: number): T[][] {
  const result = [];

  while (array.length) {
    result.push(array.splice(0, size));
  }

  return result;
}
