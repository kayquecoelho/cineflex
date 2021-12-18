import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import loading from "../../assets/load.gif";
import "./style.css";

export default function Schedule (){
    const { idFilm } = useParams();
    const [film, setFilm] = useState(null)
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilm}/showtimes`);
        promise.then((response) => setFilm(response.data))
    }, [])

    if (!film) {
        return <img src={loading} alt="loading"/>
    }

    return (
        <div className="content">
            <p className="title">Selecione o horario</p> 
            <div className="film-sessions"> 
               {film.days.map ((item, index) => <Sessions key={index} day={item}/>)}
            </div>
            <div className="chosen" >
                <div className="movie">
                    <img src={film.posterURL} alt={film.title}/>
                </div>
                {film.title}
            </div>
        </div>
    );
}

function Sessions ({day}){
    const {weekday, date, showtimes} = day;
    return (
    <div className="session">
        <p className="date">{`${weekday} - ${date}`}</p>
        <div className="schedules">
            {showtimes.map ((item, index) => <ShowTime key={index} {...item} />)}
        </div>
    </div>
    )
}

function ShowTime ({name, id}) {
    return (
        <Link to={`/assentos/${id}`}>
            <div className="show-times">
            {name}
            </div>
        </Link>
    )
}