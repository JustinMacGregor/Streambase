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
                            console.log(movie)
                            return (
                                <Movie key={i} id={movie.id} image={movie.poster_path}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList;