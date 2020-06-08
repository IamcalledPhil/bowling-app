import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputScore } from "../actions/index";
import "../styles/Game.scss";
import { Field, reduxForm } from 'redux-form'

let ScoreForm = props => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>     
    <label>
      Enter score:
      <Field name="score" component="input" type="number"/>
    </label>
    <input type="submit" value="Submit" />   
  </form>
}

ScoreForm = reduxForm({
  form: 'score'
})(ScoreForm)

const GameRow = props => {
  const dispatch = useDispatch();

  const frames = props.isViewedGameList.filter(game => game.playerID === props.player.id)[0].frames;
  console.log(frames);
  const playerFrames = [];

  const handleSubmit = score => {
    console.log(score);
  }

  for (const frame of frames){
    playerFrames.push (
      frame.canEnterScore ?
        <ScoreForm handleSubmit={handleSubmit} /> :
        <td>
          <div className="part-1">{frame.part1}</div>
          <div className="part-2">{frame.part2}</div>
          <div className="score">{frame.score}</div>
        </td>
    )
  }

  return (
    <tr>{playerFrames}</tr>
  )
}

const PlayerGameDisplay = props => {
  let playerRows = [];
  // if there is a game, display it
  if (props.isViewedGameList.length > 0){
    for (const player of props.playerList){
      playerRows.push(<GameRow player={player} isViewedGameList={props.isViewedGameList}/>)
    }
    return (
      <table>
        <caption>Game {props.isViewedGameList[0].id}</caption>
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
  const gameList = useSelector(state => state.gameList.gameList);
  const isViewedGameList = gameList.filter(game => game.isBeingViewed );

  return (
    <section className="game-view">
      <PlayerGameDisplay playerList={playerList} isViewedGameList={isViewedGameList}/>
    </section>
  );
};