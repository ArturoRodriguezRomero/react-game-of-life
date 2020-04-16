import { GameOfLife } from "./GameOfLife";
import { stringToGameState } from "./GameOfLifeParser";

export class GameExamples {
  public static block(): GameOfLife {
    return this.example(4, 4, ["····", "·**·", "·**·", "····"]);
  }

  public static beeHive(): GameOfLife {
    return this.example(6, 5, [
      "······",
      "··**··",
      "·*··*·",
      "··**··",
      "······",
    ]);
  }

  public static loaf(): GameOfLife {
    return this.example(6, 5, [
      "······",
      "··**··",
      "·*··*·",
      "··**··",
      "······",
    ]);
  }

  public static blinker(): GameOfLife {
    return this.example(5, 5, ["·····", "·····", "·***·", "·····", "·····"]);
  }

  public static toad(): GameOfLife {
    return this.example(6, 6, [
      "······",
      "······",
      "··***·",
      "·***··",
      "······",
      "······",
    ]);
  }

  public static beacon(): GameOfLife {
    return this.example(6, 6, [
      "······",
      "·**···",
      "·*····",
      "····*·",
      "···**·",
      "······",
    ]);
  }

  public static glider(): GameOfLife {
    return this.example(10, 5, [
      "··········",
      "·····*····",
      "···*·*····",
      "····**····",
      "··········",
    ]);
  }

  private static example(
    width: number,
    height: number,
    state: String[]
  ): GameOfLife {
    return GameOfLife.new(width, height, stringToGameState(...state));
  }
}
