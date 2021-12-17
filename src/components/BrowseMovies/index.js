import {useState, useEffect}from "react"
import axios from "axios"
import "./style.css"
import { Link } from "react-router-dom";

export default function BrowseMovies (){
    const [films, setFilms] = useState([]);

    useEffect(()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies")
        promise.then((response)=> {
            setFilms(response.data)
        })
    }, [])

    return (
        <div className= "content">
            <p className="title">Selecione o filme</p>  

            <div className="movies-section">
                {films.map(item => <Movie {...item}></Movie>)}
            </div>
        </div>
    )
}
function Movie ({id, posterURL}){
    return (
        <Link to={`/sessoes/${id}`}>
            <div className="movie">
                <img src={posterURL}/>
            </div>
        </Link>
    )
}
