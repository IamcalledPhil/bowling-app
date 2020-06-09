import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGame, createPlayer, finishGame, start } from "../actions/index";
import "../styles/Menu.scss";

export default  () => {
  const canCreateNewPlayers =  useSelector(state => state.players.canCreateNewPlayers);
  const playerIDs = useSelector(state => state.players.playerList).map(({ id }) => id);
  const gameList = useSelector(state => state.games.gameList);
  const currentGameID = useSelector(state => state.games.currentGameID);
  // get most recent game id, pass to creategameforplayer function to make possible having multiple players per game id
  const dispatch = useDispatch();
  if (canCreateNewPlayers){
    return (
      <div className="main-menu">
          <button disabled={!canCreateNewPlayers} onClick={() => dispatch(createPlayer("test player"))}>Create player</button>
          <button onClick={() => {dispatch(start()); dispatch(createGame(playerIDs))}}>Start playing!</button>
      </div>
    )
  } else {
    return (
      <div className="main-menu">
          <button disabled={canCreateNewPlayers} onClick={() => dispatch(createGame(playerIDs))}>Create game</button>
          <button disabled={canCreateNewPlayers} onClick={() => dispatch(finishGame(currentGameID))}>Finish game</button>
      </div>
      );
  }
};