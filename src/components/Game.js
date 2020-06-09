import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputScore } from "../actions/index";
import "../styles/Game.scss";

const ScoreForm = props => {
  const dispatch = useDispatch();

  return <form className={props.className}>     
    <label>
      Pins:
      <input name="score" 
        onChange={event => dispatch(
          inputScore({
            score: event.target.value,
            framePart: props.framePart,
            gameID: props.gameID,
            playerID: props.playerID,
            index: props.frameIndex
          })
        )} 
        value={props.frameValue}
        type="number"/>
    </label>
  </form>
}

const GameRow = props => {
  const gameList = useSelector(state => state.games.gameList);

  const currentGame = gameList[props.currentGameID].filter(game => game.playerID === props.playerID)[0];
  const currentFrames = currentGame.frames;
  console.log(currentFrames);
  const playerFrameViews = [];

  for (const frame of currentFrames){
    playerFrameViews.push (
        <td>
          <ScoreForm  className="part-1" framePart={1} frameValue={frame.part1} frameIndex={currentFrames.indexOf(frame)} playerID={props.playerID} gameID={currentGame.id}/> 
          <ScoreForm  className="part-2" framePart={2} frameValue={frame.part2} frameIndex={currentFrames.indexOf(frame)} playerID={props.playerID} gameID={currentGame.id}/> 
          <div className="score">{frame.score}</div>
        </td>
    )
  }

  return (
    <tr>{playerFrameViews}</tr>
  )
}

const PlayerGameDisplay = props => {
  let playerRows = [];
  // if there is a game, display it
  if (props.isViewedGameList){
    for (const player of props.playerList){
      playerRows.push(<GameRow playerID={player.id} isViewedGameList={props.isViewedGameList}/>)
    }
    return (
      <table>
        <caption>Game {props.currentGameID}</caption>
        <tbody>
          {playerRows} 
        </tbody>
      </table>
    );
  } else {
    return (
      <table/>
    )
  }

};

export default () => {
  const playerList = useSelector(state => state.players.playerList);
  const currentGameID = useSelector(state => state.games.currentGameID);

  return (
    <section className="game-view">
      <PlayerGameDisplay playerList={playerList} currentGameID={currentGameID}/>
    </section>
  );
};