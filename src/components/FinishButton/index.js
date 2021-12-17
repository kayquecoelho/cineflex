import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style";

export default function FinishButton ({bookedSeats, cpf, setCpf, username}){
    const [path, setPath] = useState(false);
    const { Button } = style;

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
        setPath(true)
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