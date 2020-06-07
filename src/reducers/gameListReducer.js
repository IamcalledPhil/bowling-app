import { GAME_CREATED } from "../constants/action-types";

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
      return Object.assign({}, state, {
        gameList: state.gameList.concat(action.payload.gameID)

      });
    } 
    return state;
  }


export default gameListReducer;