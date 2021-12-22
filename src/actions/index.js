// 1st step to create a action then go to reducar file for 2nd step
// we have moved it to action as beacause this variable is called actions type
// action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';

// this function is called action creators
export function addMovies (movies){
    return {
             type:ADD_MOVIES, // this is of typ of action
              // movies: movies
              movies            
    }
}

export function addFavourite (movie){
    return {
             type:ADD_FAVOURITE, // this is of typ of action
              // movies: movies
              movie            
    }
}

export function removeFromFavourites(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITES,
        val
    };
}