import { combineReducers } from 'redux';
import playerListReducer from './playerListReducer';
import gameListReducer from './gameListReducer';
import animationScreenReducer from './animationScreenReducer';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({  
    players: playerListReducer,
    gameList: gameListReducer,
    animationScreen: animationScreenReducer,
    form: formReducer
});

export default rootReducer;