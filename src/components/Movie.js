import React from 'react'

const Movie = (props) => {

    const api_key = "c4c81ee0662a6bb5b3b0495520d6c51a"
    let streamChoice = []
    async function returnDetails() {
        streamChoice = []
        await fetch(`https://api.themoviedb.org/3/movie/${props.id}/watch/providers?api_key=${api_key}`)
        .then(data => data.json())
        .then(data => {
            if (data.results.CA.hasOwnProperty("flatrate"))
                data.results.CA.flatrate.forEach(element => {
                    streamChoice.push(element.provider_name)
                });
        })
        console.log(streamChoice)
        alert(streamChoice)
    }

    return (
        <div className="col s12 m6 13">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://bit.ly/3956asc`} alt="card image" style={{width:"100%", height:360}}/> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{width:"100%", height:360}}/>
                    }
                </div>
                <div className="card-content">
                    {/* <p><a href="#">View Details</a></p> */}
                    <p><button onClick={() => returnDetails()}>View Details</button></p>
                </div>
            </div>
        </div>
    )
}

export default Movie;