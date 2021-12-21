// we have moved it to action as beacause this variable is called actions type
// action type
export const ADD_MOVIES = 'ADD_MOVIES';
// this function is called action creators
export function addMovies (movies){
    return {
             type:ADD_MOVIES, // this is of typ of action
              // movies: movies
              movies            
    }
}