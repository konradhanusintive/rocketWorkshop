import { FLIGHT } from './action';

const reducer = (state = 0, action) => {
    switch(action.type) {
        case FLIGHT:
            return (state + 10) * 2; 
        default:
            return state;
    }
} 

export default reducer;