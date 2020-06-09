import { GAME_CREATED, GAME_FINISHED, SCORE_INPUT } from "../constants/action-types";

  const initialState = {
    currentGameID: null,
    gameList: {}
  };

/**
 * Sets the state for the list of games
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
function gameListReducer(state = initialState, action) {
    if (action.type === GAME_CREATED) {
      return {...state, 
        ...{currentGameID: action.payload.gameID},
        gameList: {...state.gameList, [action.payload.gameID]: action.payload.newGameBatch}}
    } 
    else if (action.type === GAME_FINISHED){
      return state.gameList.map((game) => {
        if (game.id !== action.payload.gameID) {
          return game
        }
        return {
          ...game,
          ...{isCurrent: false}
        }
      })    }
    else if  (action.type === SCORE_INPUT) {
        return {...state, gameList: {...state.gameList, 
          [action.payload.gameID]: state.gameList[action.payload.gameID]
            .filter(
              games => games[0].id === action.payload.gameID)[0]
              .filter(game => game.playerID === action.payload.playerID)
              .map(game => {
                console.log(game);
                game.frames.map((frame, index) => {
                  console.log(frame);
                  if (index === action.index) {
                    if (action.framePart === 1) {
                      return {
                        ...frame.part1, 
                        score: action.payload.score
                      }
                    }
                  }
                  else {
                      return Object.assign({}, frame.part2, {
                        score: action.payload.score
                      })
                    }
                  return frame;
                })
                return game;
              })
            }
          } 
      }
    return state;
  }


export default gameListReducer;