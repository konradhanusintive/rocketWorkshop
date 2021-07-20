import { GO } from './action';

const reducer = (state = 0, action) => {
    switch(action.type){
        case GO: 
            return state+12;
        default:
            return state;
    }
} 

export default reducer;