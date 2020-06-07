import { GAME_CREATED, SCORE_INPUT } from "../constants/action-types";

import newGameFrames  from "../constants/game-presets";

  const initialState = {
    frames: {}
  };

/**
 * Sets the state for the list of games
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
function gameFramesReducer(state = initialState, action) {
    if (action.type === GAME_CREATED) {
      return {...state, frames: { [action.payload.gameID]: {[action.payload.playerID]: newGameFrames}, ...state.frames}}
        
     
    } else if  (action.type === SCORE_INPUT) {
      return state.frames[action.payload.gameID][action.payload.playerID].map((frame, index) => {
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


export default gameFramesReducer;