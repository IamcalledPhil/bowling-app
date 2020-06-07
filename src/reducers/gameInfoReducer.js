import { GAME_CREATED } from "../constants/action-types";

const initialState = {
    id: "",
    isBeingViewed: false,
    isBeingPlayed: false
  };
  
/**
 * Sets the state for show information and conditional show display
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
  function gameReducer(state = initialState, action) {
    if (action.type === GAME_CREATED) {
      return Object.assign({}, state, {
        isBeingPlayed: true,
        isBeingViewed: true,
        id: action.payload.id,
        frames: action.payload.frames
      });
    }
    return state;
  }


export default gameReducer;