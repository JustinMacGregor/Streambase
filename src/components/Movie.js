import React from 'react'

const Movie = (props) => {
    return (
        <div className="col s10 m3 13">
            <div className="card">
                <div data-aos="fade-up">

                </div>
                <div className="card-image waves-effect waves-block waves-light" >
                    {
                        props.movie.poster_path == null ? <img src={`https://bit.ly/3956asc`} alt="card image" style={{width:"50%", height:420}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:420}}/>
                    }
                </div>
                <h5 className="card-title" style={{fontSize:20}}>{props.movie.title}</h5>
                <div className="card-content">
                    <p><a href="#" onClick={() => props.viewMovieInfo(props.movieId)}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;