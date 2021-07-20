export const LAUNCH = '@ROCKET/LAUNCH';
export const DESTORY = '@ROCKET/DESTORY';

export const actionCreators = {
    launch: () => ({ type: LAUNCH}), 
    destory: () => ({ type: DESTORY})
}