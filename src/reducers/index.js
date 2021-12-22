//const ADD_MOVIES = 'ADD_MOVIES';
// step2: import Action
// reducer is our 2nd  step we need to inport action
import { ADD_MOVIES,ADD_FAVOURITE,REMOVE_FROM_FAVOURITES, SET_SHOW_FAVOURITES } from '../actions' // importing ADD_MOVIES from actio folder
const initialMovieState = {
    list:[],
    favourites:[],
    showFavoirites: false
}
export default function movies (state=initialMovieState, action) {
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

/*
export default function movies (state=[], action) {
    if(action.type ===ADD_MOVIES){
        return action.movies;
    }
    return state;
}*/