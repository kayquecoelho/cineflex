import {useState, useEffect}from "react"
import axios from "axios"
import "./style.css"

export default function BrowseMovies (){
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        promise.then((response)=> {
            setMovies(response.data)
        })
    }, [])

    return (
        <div className= "content">
            <p className="title">Selecione o filme</p>  

            <div className="movies-section">
                {movies.map(item => <Movie data={item}></Movie>)}
            </div>
        </div>
    )
}
function Movie (props){
    return (
        <div className="movie">
            <img src={props.data.posterURL}/>
        </div>
    )
}