import { GameOfLife } from "./GameOfLife";
import { stringToGameState, gameToString } from "./GameOfLifeParser";

describe("GameOfLife", () => {
  describe("Still Lifes", () => {
    test("Block", () => {
      const block = ["····", "·**·", "·**·", "····"];

      const game = GameOfLife.new(4, 4, stringToGameState(...block));
      game.tick();

      expect(gameToString(game)).toEqual(block);
    });

    test.skip("Bee-hive", () => {
      const beeHive = ["······", "··**··", "·*··*·", "··**··", "······"];

      const game = GameOfLife.new(6, 5, stringToGameState(...beeHive));
      game.tick();

      expect(gameToString(game)).toEqual(beeHive);
    });
  });
});
