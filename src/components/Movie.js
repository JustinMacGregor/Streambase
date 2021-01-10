import React from 'react'

const Movie = (props) => {

    const api_key = "c4c81ee0662a6bb5b3b0495520d6c51a"
    
    let streamChoice = []
    async function returnDetails() {
        streamChoice = []
        await fetch(`https://api.themoviedb.org/3/movie/${props.id}/watch/providers?api_key=${api_key}`)
        .then(data => data.json())
        .then(data => {
            try {
                if (data.results.CA.hasOwnProperty("flatrate"))
                data.results.CA.flatrate.forEach(element => { streamChoice.push(element.provider_name)});
                console.log(streamChoice)
                alert(streamChoice)
            } catch(e) {}
        })
    }

    return (
        <div className="col s10 m3 13">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.movie.poster_path == null ? <img src={`https://bit.ly/3956asc`} alt="card image" style={{width:"50%", height:420}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:420}}/>
                    }
                </div>
                <h5 className="card-title" style={{fontSize:20}}>{props.movie.title}</h5>
                <div className="card-content">
                    {/* <p><a href="#">View Details</a></p> */}
                    <p><a href="#" onClick={() => returnDetails()}>View Details</a></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;