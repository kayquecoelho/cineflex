import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style";

export default function FinishButton ({bookedSeats, cpf, setCpf, username, filmInfo, setFilmInfo, bookedSeatsName}){
    const { Button } = style;
    const [path, setPath] = useState(false);
    const valCpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/
    
    useEffect(() => {
        if (bookedSeats.length !== 0 && username !== "" && valCpf.test(cpf)){
            setPath(true)
        } else {
            setPath(false)
        }
    }, [bookedSeats, cpf, username])

    function finish(){
        const {day, movie} = filmInfo;
        setCpf(cpf.replace(/\D/g, ''))
        
        const infoToRequest = {
            ids: bookedSeats,
            name: username,
            cpf: cpf
        }

        setFilmInfo({day, movie, username, cpf, seats: bookedSeatsName})

        const promise = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", infoToRequest);
        promise.then((response) => console.log(response))
        promise.catch((error) => console.log(error.response))
    }

    if (path === true){
        return (
            <Link to="/sucesso">
                <Button onClick={()=>finish()}>
                    Reservar assento(s)
                 </Button>
            </Link>
        )
    }

    return (
        <Button onClick={()=>finish()}>
            Reservar assento(s)
        </Button>
    )
}
