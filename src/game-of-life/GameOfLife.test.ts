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

    test("Bee-hive", () => {
      const beeHive = ["······", "··**··", "·*··*·", "··**··", "······"];

      const game = GameOfLife.new(6, 5, stringToGameState(...beeHive));
      game.tick();

      expect(gameToString(game)).toEqual(beeHive);
    });

    test("Loaf", () => {
      const loaf = ["······", "··**··", "·*··*·", "··**··", "······"];

      const game = GameOfLife.new(6, 5, stringToGameState(...loaf));
      game.tick();

      expect(gameToString(game)).toEqual(loaf);
    });

    test("Boat", () => {
      const boat = ["·····", "·**··", "·*·*·", "··*··", "·····"];

      const game = GameOfLife.new(5, 5, stringToGameState(...boat));
      game.tick();

      expect(gameToString(game)).toEqual(boat);
    });

    test("Tub", () => {
      const tub = ["·····", "··*··", "·*·*·", "··*··", "·····"];

      const game = GameOfLife.new(5, 5, stringToGameState(...tub));
      game.tick();

      expect(gameToString(game)).toEqual(tub);
    });
  });

  describe("Oscilators", () => {
    test("Blinker", () => {
      const blinker = ["·····", "·····", "·***·", "·····", "·····"];

      const game = GameOfLife.new(5, 5, stringToGameState(...blinker));
      game.tick();

      expect(gameToString(game)).toEqual([
        "·····",
        "··*··",
        "··*··",
        "··*··",
        "·····",
      ]);
    });

    test("Toad", () => {
      const toad = ["······", "······", "··***·", "·***··", "······", "······"];

      const game = GameOfLife.new(6, 6, stringToGameState(...toad));
      game.tick();

      expect(gameToString(game)).toEqual([
        "······",
        "···*··",
        "·*··*·",
        "·*··*·",
        "··*···",
        "······",
      ]);
    });

    test("Beacon", () => {
      const toad = ["······", "·**···", "·*····", "····*·", "···**·", "······"];

      const game = GameOfLife.new(6, 6, stringToGameState(...toad));
      game.tick();

      expect(gameToString(game)).toEqual([
        "······",
        "·**···",
        "·**···",
        "···**·",
        "···**·",
        "······",
      ]);
    });
  });

  describe("Spaceships", () => {
    test("Glider", () => {
      const toad = [
        "··········",
        "·····*····",
        "···*·*····",
        "····**····",
        "··········",
      ];

      const game = GameOfLife.new(10, 5, stringToGameState(...toad));

      game.tick();
      expect(gameToString(game)).toEqual([
        "··········",
        "····*·····",
        "·····**···",
        "····**····",
        "··········",
      ]);

      game.tick();
      expect(gameToString(game)).toEqual([
        "··········",
        "·····*····",
        "······*···",
        "····***···",
        "··········",
      ]);

      game.tick();
      expect(gameToString(game)).toEqual([
        "··········",
        "··········",
        "····*·*···",
        "·····**···",
        "·····*····",
      ]);
    });
  });
});
