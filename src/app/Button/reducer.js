import { LAUNCH } from './action';

const reducer = (state = 0, action) => {

    switch(action.type){
        case LAUNCH: 
            return state+10;
        default:
            return state;
    }
} 

export default reducer;