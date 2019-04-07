import init from '../init.js';

const someReducer2 = (state = init.initialState1, action) => {
  if (action.type === 'some action') {
     state = Object.assign({}, state, {
       cover: action.payload, 
       coverLastValues: [...state.coverLastValues, action.payload]
     });
   }
   if (action.type === 'some action') {
     state = Object.assign({}, state, {
       topResults: action.payload, 
       topResultsLastValues: [...state.topResultsLastValues, action.payload]
     });
   }
   return state;
 };

export default someReducer2;
