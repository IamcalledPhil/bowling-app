import { PLAYER_CREATED, START } from "../constants/action-types";

  const initialState = {
    canCreateNewPlayers: true,
    playerList: []
  };

/**
 * Sets the state for the list of players
 *
 * @param {object} state 
 * @param {object} action
 * @return {array} Dispatches an action
 */
function playerListReducer(state = initialState, action) {
    if (action.type === PLAYER_CREATED) {
        return {...state, playerList: state.playerList.concat({id: action.payload.playerID, name: action.payload.playerName})}
    } 
    else if (action.type === START) {
      return {...state, canCreateNewPlayers: false}
    }
    return state;
  }


export default playerListReducer;