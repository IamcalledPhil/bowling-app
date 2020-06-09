import { combineReducers } from 'redux';
import playerListReducer from './playerListReducer';
import gameListReducer from './gameListReducer';
import animationScreenReducer from './animationScreenReducer';

const rootReducer = combineReducers({  
    players: playerListReducer,
    games: gameListReducer,
    animationScreen: animationScreenReducer,
});

export default rootReducer;