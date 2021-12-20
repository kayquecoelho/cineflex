import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./style";

export default function FinishButton({
  bookedSeatsIds,
  cpf,
  setCpf,
  username,
  filmInfo,
  setFilmInfo,
  bookedSeatsName,
}) {
  const { Button } = style;
  const [path, setPath] = useState(false);
  const valCpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

  useEffect(() => {
    if (bookedSeatsIds.length !== 0 && username !== "" && valCpf.test(cpf)) {
      setPath(true);
    } else {
      setPath(false);
    }
  }, [bookedSeatsIds, cpf, username]);

  function finishBooking() {
    if (bookedSeatsIds.length === 0 || !valCpf.test(cpf) || username === "") {
      return alert("Preencha os dados corretamente")
    }
    const { day, movie, name } = filmInfo;
    setCpf(cpf.replace(/\D/g, ""));

    const infoToRequest = {
      ids: bookedSeatsIds,
      name: username,
      cpf: cpf,
    };

    setFilmInfo({
      day,
      movie,
      username,
      cpf,
      seats: bookedSeatsName,
      session: name,
    });

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
      infoToRequest
    );
    promise.then((response) => console.log(response));
    promise.catch((error) => console.log(error.response));
  }

  if (!path) {
    return <Button onClick={finishBooking}>Reservar assento(s)</Button>;
  }
  
  return (
    <Link to="/sucesso">
      <Button onClick={finishBooking}>Reservar assento(s)</Button>
    </Link>
  );
}
