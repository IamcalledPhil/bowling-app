import { GAME_CREATED, GAME_FINISHED, SCORE_INPUT, PLAYER_CREATED, START } from "../constants/action-types";
import newGameFrames  from "../constants/game-presets";

/**
* Action creators for user actions
*/

let previousPlayerID = 0;
let previousGameID = 0;

export function createGame(playerIDs) {
    let newGameBatch = [];
    const gameID = previousGameID + 1;
    playerIDs.forEach(playerID => newGameBatch.push(
        {id: gameID, isCurrent: true, isBeingViewed: true, playerID, frames: newGameFrames}  
    ));

    const action = { type: GAME_CREATED, payload: {newGameBatch} };
    previousGameID = gameID;
    return action;
}

export function finishGame (gameID) {
    return { type: GAME_FINISHED, payload: {gameID: gameID}}
}

export function createPlayer(playerName) {
    const playerID = previousPlayerID + 1;
    const action = { type: PLAYER_CREATED, payload: { playerID, playerName } };
    previousPlayerID = playerID;
    return action;
}

export function start () {
    return { type: START }
}

export function inputScore(payload) {
    return { type: SCORE_INPUT, payload }
}