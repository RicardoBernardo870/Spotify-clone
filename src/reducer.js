export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing.
    //token:"BQDxre7UbI1GVFJVzbbyL86y8JoZC-Pvh9hoMncdHVPIrUay_dJfwp3RLXAWJJx6wJ0yv82eHQo2vjik2o_QTdc9YzEKzajd-PU9ePHtFRkhp3GoyxD6Pwr2cRQDBueP3YPA7vFJQ33eKvLW2eBPkf180gyamqN8",
};

const reducer = (state, action) => {
console.log(action)
switch (action.type) {
    case 'SET_USER':
        return {
            ...state,
            user: action.user
        };
    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        }
    case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists: action.playlists
        }
    case 'SET_DISCOVER_WEEKLY':
        return {
            ...state,
            discover_weekly: action.discover_weekly,
        }
        default:
        return state;
       
}
}

export default reducer