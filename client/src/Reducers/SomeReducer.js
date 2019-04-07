import init from '../init.js';

const someReducer = (state = init.initialState2, action) => {
   if (action.type === 'some action') {
     state = Object.assign({}, state, {
       currentSong: action.payload,
       lastValues: [...state.lastValues, action.payload]
     });
   }
   if (action.type === 'some action') {
     state = Object.assign({}, state, {
       trackList: action.payload, 
       lastValues: [...state.lastValues, action.payload]
     });
   }
   return state;
 };

export default someReducer;