import React from "react";
import {GameGridContainer} from "./game-grid.styles";
import GameCell from "../game-cell/game-cell.component";

const GameGrid = () => (
    <GameGridContainer>
        {
            [0, 1, 2].map((x) =>
                [0, 1, 2].map((y) =>
                    <GameCell key={x + y} x={x} y={y}/>
                )
            )
        }
    </GameGridContainer>
)

export default GameGrid;