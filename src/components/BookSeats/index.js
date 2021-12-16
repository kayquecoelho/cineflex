import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import loading from "../../assets/load.gif"


export default function Bookseats () {
    const {idSession} = useParams()

    const [session, setSession] = useState()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`)
        promise.then((response) => {
            setSession(response.data)
            console.log(response.data)
        })
    }, [])

    if (!session){
        return <img className="loading" src={loading} alt="loading" />
    }

    return (
        <>
            <p className="title">Selecione o(s) assento(s)</p>
            
            <div className="seats-browse">
                {session.seats.map((seat) => <Seats {...seat}/>)}
            </div>

            <div className="subtitle">
                    <div className="type-box">
                        <div className="type selected"></div>
                        <p className="type-name">Selecionado</p>
                    </div>
                    <div className="type-box">
                        <div className="type free"></div>
                        <p className="type-name">Disponível</p>
                    </div>
                    <div className="type-box">
                        <div className="type occupied"></div>
                        <p className="type-name">Indisponível</p>
                    </div>
            </div>

            <div className="chosen" >
                <div className="movie">
                    <img src={session.movie.posterURL} alt={session.movie.title}/>
                </div>
                <div className="description">
                    <p className="film-title">{session.movie.title}</p>
                    <p className="film-date">{`${session.day.weekday} - ${session.day.date}`}</p>
                </div>
            </div>
        </>
    ) 
}

function Seats ({name, id, isAvailable}) {
    const [className, setClassName] = useState(isAvailable ? "free": "occupied")

    function selectSeat (){
        if (className === "occupied"){
            return;
        }
        setClassName("selected")
    }

    return (
        <div key={id} className = {`seats ${className}`} onClick={selectSeat}>
            {name}
        </div>
    )
}