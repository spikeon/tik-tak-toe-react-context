import React from "react";
import {GameContext} from "../../contexts/game.context";
import {GameCellContainer} from "./game-cell.styles";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const GameCell = ({x, y}) => {

    const didCellWin = (winningCells => {
        for (const cell of winningCells) {
            if (x === cell[0] && y === cell[1]) return true;
        }
        return false;
    });

    return (
        <GameContext.Consumer>
            {({gameState, gameOver, winningCondition, checkGameState, changePlayer, changeGameState}) => (
                <GameCellContainer
                    onClick={() => {
                        if (gameOver || !changeGameState(x, y)) return;
                        changePlayer();
                        checkGameState();
                    }}
                    winningCell={winningCondition ? didCellWin(winningCondition) : false}
                >
                    <FontAwesomeIcon icon={gameState[x][y]?.icon}/>
                </GameCellContainer>
            )}
        </GameContext.Consumer>
    );
};

export default GameCell;