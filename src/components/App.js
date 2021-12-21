import React from "react";
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies } from "../actions";

//import movies from "../reducers";
class App extends React.Component {
  componentDidMount(){
    const { store } = this.props;
    // in real worls we make an api call 
    // we siapatch an action
    store.subscribe(()=>{
      console.log('UPDATED')
      this.forceUpdate(); // we should never use this method
    })
     store.dispatch(addMovies(data) // passig the movie value and tis function call will return us the below objet
       //{ as this object we have value which is hardcoded we need to make it dynamic
    
      //   type:'ADD_MOVIES', // this is of typ of action
    //   movies: data
    // }
    );
    console.log('STATE',this.props.store.getState())
  }


  
  render(){   
    console.log('RENDER') 
  //const movies = this.props.store.getState(); // gtting from index.js file
  const {list} = this.props.store.getState(); // gtting from index.js file
  console.log('NEW STATE',this.props.store.getState()); 
  
  return (
    <div className="App">
        <Navbar />
        <div className="main">
              <div className="tabs">
                    <div className="tab">Movies</div>
                    <div className="tab">Favourites</div>
              </div>
              <div className="lsit">
                {//data.map((movie,index) =>(
               // movies.map((movie,index) =>(
                list.map((movie,index) =>(
                  
                  //  passing movie data via props
                  //console.log('movie',movie)

                  <MovieCard movie={movie} key={`movies-${index}`}  />
                ))}
              </div>

        </div>
    </div>
  );
                }
}

export default App;
