import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGameForPlayer, createPlayer } from "../actions/index";

export default  () => {
  const playerList = useSelector(state => state.players.playerList);
  // get most recent game id, pass to creategameforplayer function to make possible having multiple players per game id
  const dispatch = useDispatch();


  const createGame = () => {
    for (const player of playerList){
      dispatch(createGameForPlayer(player.id))
    }
  }

  return (
    <div>
      <button onClick={() => createGame()}>Create game</button>
      <button onClick={() => dispatch(createPlayer("testplayer"))}>Create player</button>
    </div>
  );
};