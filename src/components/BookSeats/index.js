import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./style.css"
import loading from "../../assets/load.gif"


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

    function finish(){
        const valCpf = /\d{3}\.?\d{3}\.?\d{3}-?\d{2}/

        if (bookedSeats.length === 0){
            return alert("Escolha um assento")
        }
        if (username === ""){
            return alert("Digite um nome válido")
        }
        if (!valCpf.test(cpf)) {
            return alert("Digite um cpf válido");
        }

        setCpf(cpf.replace(/\D/g, ''))

        const infoToRequest = {
            ids: bookedSeats,
            name: username,
            cpf: cpf
        }

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", infoToRequest);
        promise.then((response) => console.log(response))
        promise.catch((error) => console.log(error.response))
        
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
            ></Form>

        
            <button className="finish" onClick={finish}>Reservar assento(s)</button>
            
            
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

function Seat ({name, id, isAvailable, setBookedSeats, bookedSeats}) {
    const [className, setClassName] = useState(isAvailable ? "free": "occupied")
    
    function selectSeat (){
       
        if (className === "occupied"){
            return alert("Este assento está ocupado");
        }
        if (className === "selected"){
            const index = bookedSeats.findIndex((item) => item === id);
            bookedSeats.splice(index, 1);
            setClassName("free")
            return;
        }
        
        setClassName("selected")
        setBookedSeats([...bookedSeats, id])
        
    }

    return (
        <div key={id} className = {`seats ${className}`} onClick={selectSeat}>
            {name}
        </div>
    )
}

function Form ({username, setUsername, cpf, setCpf}){

    return (
        <div className="form">
                <p>Nome do comprador:</p>
                <input 
                className="username" 
                type="text" 
                placeholder="Digite seu nome..." 
                onChange={(event) => setUsername(event.target.value) }
                value={username}
                />
                
                <p>CPF do comprador:</p>
                <input 
                className="cpf" 
                type="text" 
                placeholder="Digite seu CPF..."
                onChange={(event) => setCpf(event.target.value)}
                value={cpf}
                />
        </div>
    )
}