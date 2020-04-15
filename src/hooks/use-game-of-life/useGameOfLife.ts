import { GameOfLife, State } from "../../game-of-life/GameOfLife";
import { useState } from "react";

export const useGameOfLife = (
  width: number,
  height: number,
  initial: State
) => {
  const [game] = useState(GameOfLife.new(width, height, initial));

  return { game: game };
};
