export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //TO BE REMOVED
    token: 'BQDi3RUf46khiMU8shzt3DPO30bOagPJaQVO_-qPe_8Tq2mA7O…1yg9NGaPa0SMPQOxLCmPTjbHBoxMqVdBMu8CzGzLvMFHifBhE'
};

const reducer = (state, action) => {
    console.log(action);
    
    //Action -> type, [payload]

    switch(action.type){
       case 'SET_USER':
           return {
               ...state,
               user:action.user
           }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }  
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists:action.playlists
            }    
        default:
            return state;
    }
}

export default reducer;