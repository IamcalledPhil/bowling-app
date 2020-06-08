import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputScore } from "../actions/index";


const GameRow = props => {
  console.log(props);

  const frames = props.isViewedGameList.filter(game => game.playerID === props.player.id)[0].frames;
  console.log(frames);
  const playerFrames = [];
  for (const frame of frames){
    playerFrames.push(<td>
      <div className="part-1">{frame.part1}</div>
      <div className="part-2">{frame.part2}</div>
      <div className="score">{frame.part1}</div>
    </td>)
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
  const dispatch = useDispatch();

  return (
    <section>
      <PlayerGameDisplay playerList={playerList} isViewedGameList={isViewedGameList}/>
      <button onClick={() => dispatch(inputScore())}>Input score</button>
    </section>
  );
};