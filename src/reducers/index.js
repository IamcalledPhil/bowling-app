import { combineReducers } from 'redux';
import playerListReducer from './playerListReducer';
import gameListReducer from './gameListReducer';
import animationScreenReducer from './animationScreenReducer';
import gameFramesReducer from './gameFramesReducer';


const rootReducer = combineReducers({  
    players: playerListReducer,
    gameList: gameListReducer,
    frames: gameFramesReducer,
    animationScreen: animationScreenReducer
});

export default rootReducer;