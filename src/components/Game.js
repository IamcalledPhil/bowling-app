import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputScore } from "../actions/index";
import "../styles/Game.scss";

const ScoreForm = props => {
  const dispatch = useDispatch();

  return <form className={props.className}>     
    <label>
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
        placeholder={0}
        type="number"/>
    </label>
  </form>
}

const GameRow = props => {
  const gameList = useSelector(state => state.games.gameList);
  const currentGame = gameList[props.currentGameID].filter(game => game.playerID === props.playerID)[0];
  const currentFrames = currentGame.frames;
  const playerFrameViews = [];

  for (const frame of currentFrames){
    playerFrameViews.push (
        <div className="frame">
          <h3 className="frame-number">{currentFrames.indexOf(frame)+1}</h3>
          <div className="scoreform-container">
            <ScoreForm  className="part-1" framePart={1} frameValue={frame.part1} frameIndex={currentFrames.indexOf(frame)} playerID={props.playerID} gameID={currentGame.id}/> 
            <ScoreForm  className="part-2" framePart={2} frameValue={frame.part2} frameIndex={currentFrames.indexOf(frame)} playerID={props.playerID} gameID={currentGame.id}/> 
          </div>     
          <h2 className="score">{frame.score || 0}</h2>
        </div>
    )
  }

  return (
    <div className="player-row">
      <div className="player-info">
        <h2>Player {props.playerID}</h2>
        <h3>Total score: 0</h3>
      </div>
      <div className="frames">
        {playerFrameViews}
      </div>
    </div>
  )
}

const PlayerGameDisplay = props => {
  let playerRows = [];
  // if there is a game, display it
  if (props.currentGameID){
    for (const player of props.playerList){
      playerRows.push(<GameRow playerID={player.id} currentGameID={props.currentGameID} />)
    }
    return (
      <div className="game-grid">
        <h2>Game {props.currentGameID}</h2>
        <div className="key">
          <h3 className="frame-number">Frame number</h3>
            <div className="scoreform-container">
              <p className="part-1">Pins</p> 
              <p className="part-2">Pins</p>
            </div>     
            <h2 className="score">Score</h2>
        </div>
          {playerRows} 
      </div>
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