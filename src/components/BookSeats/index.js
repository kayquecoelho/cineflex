import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FinishButton from "../FinishButton";
import Seat from "../Seat";
import Form from "../Form";
import { Content, SeatsBrowse, Subtitle, Container, Footer } from "./style";

export default function BookSeats({ filmInfo, setFilmInfo }) {
  const { idSession } = useParams();
  const [bookedSeatsIds, setBookedSeatsIds] = useState([]);
  const [bookedSeatsName, setBookedSeatsName] = useState([]);
  const [username, setUsername] = useState("");
  const [cpf, setCpf] = useState("");
  const [session, setSession] = useState();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`
    );
    promise.then((response) => {
      setSession(response.data);
      setFilmInfo({ ...response.data });
    });
  }, []);

  if (!session) {
    return null;
  }

  return (
    <Content>
      <p className="title">Selecione o(s) assento(s)</p>

      <SeatsBrowse>
        {session.seats.map((seat) => {
          return (
            <Seat
              {...seat}
              key={seat.id}
              setBookedSeatsIds={setBookedSeatsIds}
              bookedSeatsIds={bookedSeatsIds}
              bookedSeatsName={bookedSeatsName}
              setBookedSeatsName={setBookedSeatsName}
            />
          );
        })}
      </SeatsBrowse>

      <Subtitle>
        <Container>
          <div className="type selected"></div>
          <p className="type-name">Selecionado</p>
        </Container>
        <Container>
          <div className="type free"></div>
          <p className="type-name">Disponível</p>
        </Container>
        <Container>
          <div className="type occupied"></div>
          <p className="type-name">Indisponível</p>
        </Container>
      </Subtitle>

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
        bookedSeatsIds={bookedSeatsIds}
        filmInfo={filmInfo}
        setFilmInfo={setFilmInfo}
        bookedSeatsName={bookedSeatsName}
      />

      <Footer>
        <div className="movie">
          <img src={session.movie.posterURL} alt={session.movie.title} />
        </div>
        <div className="description">
          <p className="film-title">{session.movie.title}</p>
          <p className="film-date">{`${session.day.weekday} - ${session.name}`}</p>
        </div>
      </Footer>
    </Content>
  );
}
