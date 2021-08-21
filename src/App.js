import {GameContext, Players} from "./contexts/game.context";
import React, {useState} from "react";
import GameGrid from "./components/game-grid/game-grid.component";
import _ from "lodash";
import {GameContainer, ResetGameButton, WinnerInformation} from "./components/common/common.styles";

function App() {

    const freshState = [[null, null, null], [null, null, null], [null, null, null]];
    const [player, setPlayer] = useState(Players.PLAYER1);
    const [gameState, setGameState] = useState(freshState);
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const [winningCondition, setWinningCondition] = useState(null);

    const changePlayer = () => {
        setPlayer(player === Players.PLAYER1 ? Players.PLAYER2 : Players.PLAYER1);
    }

    const changeGameState = (x, y) => {
        if (!_.isEmpty(gameState[x][y])) return false;
        const tmpGameState = [...gameState];
        tmpGameState[x][y] = player;
        setGameState(tmpGameState);
        return true;
    }

    const getWinner = () => {
        const winConditions = [
            [[0, 0], [1, 1], [2, 2]],
            [[0, 2], [1, 1], [2, 0]]
        ]

        for (const x of [0, 1, 2]) {
            const across = [];
            const down = [];
            for (const y of [0, 1, 2]) {
                across.push([x, y]);
                down.push([y, x]);
            }
            winConditions.push(across, down);
        }

        for (const [a, b, c] of winConditions) {
            const gameStateA = gameState[a[0]][a[1]];
            const gameStateB = gameState[b[0]][b[1]];
            const gameStateC = gameState[c[0]][c[1]];
            if (
                !_.isEmpty(gameStateA) &&
                _.isEqual(gameStateA, gameStateB) &&
                _.isEqual(gameStateB, gameStateC)
            ) {
                setWinningCondition([a, b, c]);
                return gameStateA;
            }
        }

        return null;
    }

    const hasRemainingMoves = () => {
        for (const r of gameState) {
            for (const c of r) {
                if (_.isEmpty(c)) return true;
            }
        }
        return false;
    }

    const checkGameState = () => {
        const tmpWinner = getWinner();
        if (!_.isEmpty(tmpWinner)) {
            setWinner(tmpWinner);
            setGameOver(true);
        } else if (!hasRemainingMoves()) {
            setGameOver(true);
        }
    }

    const resetGame = () => {
        setPlayer(Players.PLAYER1);
        setGameState(freshState);
        setGameOver(false);
        setWinner(null);
        setWinningCondition(null);
    }

    const providerValue = {
        gameState,
        player,
        winner,
        gameOver,
        changePlayer,
        winningCondition,
        changeGameState,
        checkGameState
    };

    return (
        <GameContext.Provider value={providerValue}>
            <GameContainer>
                <GameGrid/>
                {
                    gameOver
                        ?
                        <WinnerInformation>
                            <h3>Game Over.</h3>
                            <div>Winner: {winner ? winner.name : "Draw"}</div>
                            <ResetGameButton onClick={resetGame}>Play Again</ResetGameButton>
                        </WinnerInformation>
                        :
                        ""
                }
            </GameContainer>
        </GameContext.Provider>
    );
}

export default App;
