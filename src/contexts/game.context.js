import React from "react";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

class Player {
    constructor(name, icon) {
        this.name = name;
        this.icon = icon;
    }
}

export const Players = {
    PLAYER1: new Player("Player 1", faTimes),
    PLAYER2: new Player("Player 2", faCircle)
}

export const GameContext = React.createContext({
    gameState: [[null, null, null], [null, null, null], [null, null, null]],
    player: Players.PLAYER1,
    winner: null,
    gameOver: false,
    winningCondition: null,
    changePlayer: () => {
    },
    changeGameState: (x, y) => {
    },
    checkGameState: () => {
    }
});