import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, createPlayer, finishGame } from "../actions/index";

export default  () => {
  const playerIDs = useSelector(state => state.players.playerList).map(({ id }) => id);
  const gameList = useSelector(state => state.gameList.gameList);
  const currentGameID = gameList.filter(game => game.isCurrent).id;
  // get most recent game id, pass to creategameforplayer function to make possible having multiple players per game id
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(createGame(playerIDs))}>Create game</button>
      <button onClick={() => dispatch(finishGame(currentGameID))}>Finish game</button>
      <button onClick={() => dispatch(createPlayer("testplayer"))}>Create player</button>
    </div>
  );
};