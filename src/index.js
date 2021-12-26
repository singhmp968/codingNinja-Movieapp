import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
// import movies from './reducers' as we are impprting rootReducers
// importing thr root reducers
import rootReducer from './reducers';
import combineReducers from './reducers';


// creating a middleware
// curried form of logge({obj,next,action})
// logger(obj)(next)(action)
/*
const logger = function({dispatch,getState}){ // obj will contain disapatch and getStat propety
  return function(next){
    return function(action){
      // middle ware code
      console.log('ACTION_TYPE = ',action.type)
      next(action); // if we dont call this the our app got stuck here and  this willl be equlivant to calling that middle ware
    }
  }
}
*/
//**  converting the above function into arrow function using urring concept
// 2nd way of wirting middlware
const logger = ({dispatch,getState})=>(next)=>(action)=>{
    // middle ware code
    console.log('ACTION_TYPE = ',action.type);
    next(action); // if we dont call this the our app got stuck here and  this willl be equlivant to calling that middle ware

    
}
// in creasteStore method we need to pass reducers
//const store = createStore(movies); // createStore this is being to us by redux 
// here we are now passing the root reducers
const store = createStore(combineReducers ,applyMiddleware(logger)); // createStore this is being to us by redux 

console.log('store',store);
/*
console.log('Before state',store.getState());

store.dispatch({
  // this action object
  type:'ADD_MOVIES',
  movies: [{name:'Superman'}] //  passing the movie to be added
}); // it is used to send action in the store
console.log('After state',store.getState());
*/


ReactDOM.render(
  <React.StrictMode>
    {/* passing store as props */}
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

