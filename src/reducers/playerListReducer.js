import { PLAYER_CREATED } from "../constants/action-types";

  const initialState = {playerList: []};

/**
 * Sets the state for the list of players
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
function playerListReducer(state = initialState, action) {
    if (action.type === PLAYER_CREATED) {
      return Object.assign({}, state, {
        playerList: state.playerList.concat({id: action.payload.playerID, name: action.payload.playerName})
      });
    } 
    return state;
  }


export default playerListReducer;