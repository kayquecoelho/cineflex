import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "./style";

export default function FinishButton({
  bookedSeatsIds,
  cpf,
  setCpf,
  username,
  filmInfo,
  setFilmInfo,
  bookedSeatsName,
}) {
  const navigate = useNavigate();
  const valCpf = /^(\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/;

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
    promise.then(() => navigate("/sucesso"));
    promise.catch((error) => console.log(error.response));
  }
  
  return <Button onClick={finishBooking}>Reservar assento(s)</Button>;
}
