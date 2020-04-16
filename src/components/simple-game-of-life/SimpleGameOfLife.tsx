import React, { useState, CSSProperties, useEffect } from "react";
import { Cell, GameOfLife } from "../../game-of-life/GameOfLife";
import { GameExamples } from "../../game-of-life/GameExamples";
import "./SimpleGameOfLife.css";

export const SimpleGameOfLife: React.FC = () => {
  const examples = {
    Block: GameExamples.block(),
    "Bee Hive": GameExamples.beeHive(),
    Loaf: GameExamples.loaf(),
    Blinker: GameExamples.blinker(),
    Toad: GameExamples.toad(),
    Beacon: GameExamples.beacon(),
    Glider: GameExamples.glider(),
  };

  const [example, setExample] = useState(examples.Block);
  const [game, setGame] = useState(example);
  const [cells, setCells] = useState(game.state);

  const onExampleSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const key = event.target.value as keyof typeof examples;
    setExample(examples[key]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      game.tick();
      setCells(game.state);
    }, 200);

    return () => clearInterval(interval);
  }, [setCells, game]);

  useEffect(() => {
    setGame(example);
  }, [example, setGame]);

  const style: CSSProperties = {
    gridTemplateColumns: `repeat(${game.dimensions.width}, auto)`,
  };

  return (
    <section>
      <label className="example">
        Example
        <select onChange={onExampleSelected}>
          {Object.keys(examples).map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
      </label>
      <div className="world" style={style}>
        {cells.map((cell, index) => {
          return (
            <div
              className={`cell ${cell === Cell.Alive ? "alive" : "dead"}`}
              key={index}
            ></div>
          );
        })}
      </div>
    </section>
  );
};
