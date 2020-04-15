import React, { useState, CSSProperties } from "react";
import { useGameOfLife } from "../../hooks/use-game-of-life/useGameOfLife";
import { stringToGameState } from "../../game-of-life/GameOfLifeParser";
import { Cell } from "../../game-of-life/GameOfLife";
import "./SimpleGameOfLife.css";

export const SimpleGameOfLife: React.FC = () => {
  const width = 6;
  const height = 5;
  const initial = stringToGameState(
    "······",
    "··**··",
    "·*··*·",
    "··**··",
    "······"
  );

  const { game } = useGameOfLife(width, height, initial);
  const [cells, setCells] = useState(initial);

  const onClick = () => {
    game.tick();
    console.log(game.state);

    setCells(game.state);
  };

  const style: CSSProperties = {
    gridTemplateColumns: `repeat(${width}, 1fr)`,
  };

  return (
    <div>
      <button onClick={onClick}>Tick</button>
      <div className="world" style={style}>
        {cells.map((value, index) => {
          if (value === Cell.Alive) {
            return <div className="cell alive" key={index}></div>;
          } else {
            return <div className="cell dead" key={index}></div>;
          }
        })}
      </div>
    </div>
  );
};
