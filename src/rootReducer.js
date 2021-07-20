import { combineReducers } from 'redux';
import lukesReducer from './app/RocketLukasz/reducer';
import deansReducer from './app/RocketDean/reducer';
import { reducer as pawelReducer} from './app/RocketPawel/reducer';
import asadReducer from './app/RocketAsad/reducer';

const rootReducer = () => combineReducers({
    asadReducer: asadReducer,
    deansRocket: deansReducer,
    lukesRocket: lukesReducer,
    pawelReducer: pawelReducer,
   
});

export default rootReducer;