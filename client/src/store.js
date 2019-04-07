 import { createStore, combineReducers, applyMiddleware } from 'redux';
 import logger from 'redux-logger';
 import { Provider } from 'react-redux';
 import SomeReducer  from './Reducers/SomeReducer';
 
 const initialState = {
   someReducer : {},
 };

 const myLogger = (store) => (next) => (action) => {
   console.log ('Logged Action:', action);
   next(action);
 };

 const store = createStore(combineReducers({SomeReducer: SomeReducer}), {}, applyMiddleware());
 

 store.subscribe(() => {
   console.log('Store updated!', store.getState());

 });
 
 export default store;