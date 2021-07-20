import {CAT_ROCKET_LAUNCH} from './action'

export const reducer = (state = 0, action) => {
    if(action === CAT_ROCKET_LAUNCH) {
        return {
            ...state,
            position: (state.position || 0) + 300
        }
    }
    return state;
}