import { LAUNCH_ROCKET } from './action';

const reducer = (state = 10, action) => {
    if(action.type === LAUNCH_ROCKET) {
        return state + 10;
    }
    return state;
}

export default reducer;