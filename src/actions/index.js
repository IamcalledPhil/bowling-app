import { GAME_CREATED, SCORE_INPUT, PLAYER_CREATED } from "../constants/action-types";

/**
* Action creators for user actions
*/

let previousPlayerID = 0;
let previousGameID = 10;

export function createGameForPlayer(playerID) {
    const gameID = previousGameID + 1;
    const action = { type: GAME_CREATED, payload: { gameID, playerID } };
    previousGameID = gameID;
    return action;
}

export function createPlayer(playerName) {
    const playerID = previousPlayerID + 1;
    const action = { type: PLAYER_CREATED, payload: { playerID, playerName } };
    previousPlayerID = playerID;
    return action;
}

export function inputScore(payload) {
    return { type: SCORE_INPUT, payload }
}