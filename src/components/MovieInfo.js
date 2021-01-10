import React, {useState, useEffect} from 'react';

const MovieInfo = (props) => {
    const api_key = "c4c81ee0662a6bb5b3b0495520d6c51a"
    const [streamChoice, setStreamChoice] = useState([])

    useEffect(async () => {
        let services = []
        await fetch(`https://api.themoviedb.org/3/movie/${props.curMovie.id}/watch/providers?api_key=${api_key}`)
        .then(data => data.json())
        .then(data => {
            try {
                if (data.results.CA.hasOwnProperty("flatrate"))
                data.results.CA.flatrate.forEach(element => { services.push(element.provider_name)});
                setStreamChoice(services)
            } catch(e) {}
        })
    }, [])

    return (
        <div className="container">
            
            <div className="row" onClick={props.closeMovieInfo} style={{cursor:"pointer", paddingTop: 50}}>
                <span style={{marginLeft:10}}>Go back</span>
            </div>

            <div className="row">
                <div className="col s10 m3 13">
                    {props.curMovie.poster_path == null ? <img src={"https://bit.ly/3956asc"} alt="Card image" style= {{ width:"100%", height:480}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.curMovie.poster_path}`} alt="Card image" style= {{ width:"100%", height:360}} />}
                </div>

                <div className="col s12 m8">
                    <p>{props.curMovie.title}</p>
                    <p>{props.curMovie.release_date}</p>
                    <p>{props.curMovie.overview}</p>
                        {
                            streamChoice.map((service, i) => {
                                console.log(service)

                                return (
                                    <p key={i}>{service}</p>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    )
}

export default MovieInfo;