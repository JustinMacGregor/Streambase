import React from 'react'

const Movie = (props) => {
    return (
        <div className="col s12 m6 13">
            <div className="card">
                <div class="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://bit.ly/3956asc`} alt="card image" style={{width:"100%", height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:360}}/>
                    }
                </div>
                <div className="card-content">
                    <p><a href="#">View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;