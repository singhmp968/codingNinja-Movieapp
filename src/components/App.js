import React from "react";
import { data } from '../data'
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import movies from "../reducers";
function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="main">
              <div className="tabs">
                    <div className="tab">Movies</div>
                    <div className="tab">Favourites</div>
              </div>
              <div className="lsit">
                {data.map((movie,index) =>(
                  //  passing movie data via props
                  //console.log('movie',movie)

                  <MovieCard movie={movie} key={`movies-${index}`}  />
                ))}
              </div>

        </div>
    </div>
  );
}

export default App;
