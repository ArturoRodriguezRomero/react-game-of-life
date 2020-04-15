import { GameOfLife, State } from "../../game-of-life/GameOfLife";

export const useGameOfLife = (
  width: number,
  height: number,
  initial: State
) => {
  const game = GameOfLife.new(width, height, initial);

  return { game: game };
};
