import { GAME_CREATED, GAME_FINISHED, SCORE_INPUT } from "../constants/action-types";

  const initialState = {
    gameList: []
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
      return {...state, gameList: state.gameList.concat(action.payload.newGameBatch)}
    } else if (action.type === GAME_FINISHED){
      return state.gameList.map((game) => {
        if (game.id !== action.payload.gameID) {
          // This isn't the item we care about - keep it as-is
          return game
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...game,
          ...{isCurrent: false}
        }
      })    }
      else if  (action.type === SCORE_INPUT) {
        return state.gameList.filter((
          game => game.id === action.payload.gameID 
            && game.playerID === action.payload.playerID))
            .frames.map((frame, index) => {
            
            if (index === action.index) {
              if(action.framePart === 1){
                return Object.assign({}, frame.part1, {
                  score: action.score
                })
              } else {
                return Object.assign({}, frame.part2, {
                  score: action.score
                })
              }
          }
          return frame
        })
      }
    return state;
  }


export default gameListReducer;