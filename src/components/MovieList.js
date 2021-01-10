import React from 'react';
import AST_PropAccess from 'terser';
import Movie from './Movie'

const MovieList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {
                        props.movies.map((movie, i) => {
                            return (
                                <Movie key={i} movie={movie} movieId={movie.id} image={movie.poster_path} viewMovieInfo={props.viewMovieInfo}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;