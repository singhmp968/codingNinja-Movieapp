import React from "react";
import { addFavourite,removeFromFavourites } from '../actions';
class MovieCard extends React.Component {
    handleFavouriteClick = () =>{
        const { movie,isFavourite } = this.props;
        this.props.dispatch(addFavourite(movie));
    }
    handleUnFavouriteClick = () =>{
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    render() {
        const { movie,isFavourite } = this.props;
       // console.log('movies=>',movie)
        return (
            <div className="movie-card">
                <div className="left">
                        <img alt="movie-poster" src={movie.Poster} />
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ?
                        <button className="unfavoirite-btn" onClick={this.handleUnFavouriteClick} >UnFavourite</button>
                            :
                        <button className="favoirite-btn" onClick={this.handleFavouriteClick} >Favourite</button>

                        }
                        {/* <button className="favoirite-btn" onClick={this.handleFavouriteClick} >Favourite</button> */}
                    </div>
                </div>
            </div>
          );
    }
 
}

export default MovieCard;
