import React from 'react';

const MovieInfo = (props) => {
    return (
        <div className="container">
            
            <div className="row" onClick={props.closeMovieInfo} style={{cursor:"pointer", paddingTop: 50}}>
                <span style={{marginLeft:10}}>Go back</span>
            </div>

            <div className="row">
                <div className="col s12 m4">
                    {props.curMovie.poster_path == null ? <img src={"https://bit.ly/3956asc"} alt="Card image" style= {{ width:"100%", height:360}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.curMovie.poster_path}`} alt="Card image" style= {{ width:"100%", height:360}} />}
                </div>

                <div className="col s12 m8">
                    <p>{props.curMovie.title}</p>
                    <p>{props.curMovie.release_date}</p>
                    <p>{props.curMovie.overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;