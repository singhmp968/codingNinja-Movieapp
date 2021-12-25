// this is used in the place of rootReducers
import { combineReducers } from 'redux' 

//const ADD_MOVIES = 'ADD_MOVIES';
// step2: import Action
// reducer is our 2nd  step we need to inport action
import { ADD_MOVIES,
        ADD_FAVOURITE,
        REMOVE_FROM_FAVOURITES,
        SET_SHOW_FAVOURITES
     } from '../actions' // importing ADD_MOVIES from actio folder
const initialMovieState = {
    list:[],
    favourites:[],
    showFavoirites: false
}
//export default function movies (state=initialMovieState, action) {
// as we are exporting rootReducer and we connot have multiple defaults in a file
export  function movies (state=initialMovieState, action) {
  console.log('Movies Reducer')
/* if(action.type ===ADD_MOVIES){
        return {
            ...state, // here we are spreading the state objects
            list:action.movies

        }
    }
    return state;
    */
   switch(action.type){ // getting the atioln.type as switch i.e Add_movies or add_favurite
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
            case ADD_FAVOURITE:
                return{
                    ...state,
                    favourites:[action.movie,...state.favourites ]
                }
                // part of step 2 need to creare reducer functin for action
                case REMOVE_FROM_FAVOURITES:
                    const filetredArray = state.favourites.filter(
                        movie=>movie.Title !=action.movie.Title
                    );
                    return{
                        ...state,
                        favourites:filetredArray
                    }

                    case SET_SHOW_FAVOURITES:
                        return{
                            ...state,
                            showFavoirites:action.val
                        }
            default: 
            return state;
   }    
}

// adding the functionalities of search
const initialSearchState = {
    return:{}
}
//addding teh functionalties of search
export function search (state = initialSearchState,action){
  console.log('Search Reducer')
    
    return state;
}
// careating initialRootState
const initialRootState = {
    movies:initialMovieState,
    search:initialSearchState
}
// creating a default functions
// export default function rootReducer(state = initialRootState,action){
//     return{
//         movies:movies(state.movies,action), // here we are just telling movie should be manage by movieReducer and search should be manage by search reducer
//         search: search(state.search,action)

//     }
//}
//import { combineReducers } from 'redux' 
/*
export default combineReducers({
    movies:movies, //export  function movies (state=initialMovieState, action) {

    search:search// export default function rootReducer(state = initialRootState,action){

}) 

*/

export default combineReducers({
    movies, //export  function movies (state=initialMovieState, action) {

    search// export default function rootReducer(state = initialRootState,action){

}) 


/*
export default function movies (state=[], action) {
    if(action.type ===ADD_MOVIES){
        return action.movies;
    }
    return state;
}*/