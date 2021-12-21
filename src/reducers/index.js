//const ADD_MOVIES = 'ADD_MOVIES';
import { ADD_MOVIES } from '../actions' // importing ADD_MOVIES from actio folder
const initialMovieState = {
    list:[],
    favourite:[]
}
export default function movies (state=initialMovieState, action) {
    if(action.type ===ADD_MOVIES){
        return {
            ...state, // here we are spreading the state objects
            list:action.movies

        }
    }
    return state;
}

/*
export default function movies (state=[], action) {
    if(action.type ===ADD_MOVIES){
        return action.movies;
    }
    return state;
}*/