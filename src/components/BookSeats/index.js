import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import loading from "../../assets/load.gif"
import FinishButton from "../FinishButton";
import Seat from "../Seat";
import Form from "../Form";

export default function BookSeats () {
    const {idSession} = useParams()
    const [bookedSeats, setBookedSeats] = useState([])
    const [username, setUsername] = useState("");
    const [cpf, setCpf] = useState("")
    const [session, setSession] = useState()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`)
        promise.then((response) => {
            setSession(response.data)
        })
    }, [])

    if (!session){
        return <img className="loading" src={loading} alt="loading" />
    }

    return (
        <div className="content">
            <p className="title">Selecione o(s) assento(s)</p>
            
            <div className="seats-browse">
                {session.seats.map((seat) =>{ 
                    return (
                    <Seat {...seat} 
                    setBookedSeats= {setBookedSeats}
                    bookedSeats={bookedSeats}
                    />)
                })}
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

            <Form
                setUsername={setUsername}
                username={username}
                setCpf={setCpf} 
                cpf={cpf}
            />

            <FinishButton
                cpf={cpf}
                setCpf={setCpf} 
                username={username}
                bookedSeats={bookedSeats}
            />
            
            <footer className="chosen" >
                <div className="movie">
                    <img src={session.movie.posterURL} alt={session.movie.title}/>
                </div>
                <div className="description">
                    <p className="film-title">{session.movie.title}</p>
                    <p className="film-date">{`${session.day.weekday} - ${session.name}`}</p>
                </div>
            </footer>
        </div>
    ) 
}