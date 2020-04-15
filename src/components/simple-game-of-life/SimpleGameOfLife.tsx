import React, { useState, CSSProperties, useEffect } from "react";
import { useGameOfLife } from "../../hooks/use-game-of-life/useGameOfLife";
import { stringToGameState } from "../../game-of-life/GameOfLifeParser";
import { Cell } from "../../game-of-life/GameOfLife";
import "./SimpleGameOfLife.css";

export const SimpleGameOfLife: React.FC = () => {
  const width = 10;
  const height = 10;
  const initial = stringToGameState(
    "··········",
    "·····*····",
    "···*·*····",
    "····**····",
    "··········",
    "··········",
    "········*·",
    "······*·*·",
    "·······**·",
    "··········"
  );

  const { game } = useGameOfLife(width, height, initial);
  const [cells, setCells] = useState(initial);

  const style: CSSProperties = {
    gridTemplateColumns: `repeat(${width}, auto)`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      game.tick();
      setCells(game.state);
    }, 100);

    return () => clearInterval(interval);
  }, [setCells]);

  return (
    <section>
      <div className="world" style={style}>
        {cells.map((value, index) => {
          if (value === Cell.Alive) {
            return <div className="cell alive" key={index}></div>;
          } else {
            return <div className="cell dead" key={index}></div>;
          }
        })}
      </div>
    </section>
  );
};
