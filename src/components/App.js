import React from "react";
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies,setShowFavourites } from "../actions";

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

  isMovieFavourite = (movie) =>{
    const { favourites } = this.props.store.getState();
    console.log(favourites);
    const index = favourites.indexOf(movie);

    if(index!== -1){
      // we found the movie
      return true
    }
    return false;
  }
  
  onChangeTab = (val) =>{
    console.log('hiiii',val)
    this.props.store.dispatch(setShowFavourites(val))
  }


  render(){   
    console.log('RENDER') 
  //const movies = this.props.store.getState(); // gtting from index.js file
  const {list,favourites,showFavoirites} = this.props.store.getState(); // gtting from index.js file
  console.log('NEW STATE',this.props.store.getState()); 
    console.log('showFavourites',showFavoirites)
    const displayMovies = showFavoirites ? favourites : list;

  return (
    <div className="App">
        <Navbar />
        <div className="main">
              <div className="tabs">
                    {/* <div className="tab" onClick={this.onChangeTab} >Movies</div>
                    <div className="tab" onClick={this.onChangeTab}  >Favourites</div> */}

                    <div className={`tab ${showFavoirites?'':'active-tabs'}`} onClick={()=>this.onChangeTab(false)} >Movies</div>
                    <div className={`tab ${showFavoirites?'active-tabs':''}`} onClick={()=>this.onChangeTab(true)}  >Favourites</div>
              </div>
              <div className="lsit">
                {//data.map((movie,index) =>(
               // movies.map((movie,index) =>(
                //list.map((movie,index) =>(
                  displayMovies.map((movie,index) =>(
                  //  passing movie data via props
                  //console.log('movie',movie)

                  <MovieCard movie={movie}
                   key={`movies-${index}`}
                   dispatch={this.props.store.dispatch}
                   isFavourite={this.isMovieFavourite(movie)}  
                     />
                ))}
              </div>
                    {displayMovies.length === 0 ? <div className="no-movies">No movies to dispaly</div>:null}
        </div>
    </div>
  );
                }
}

export default App;
