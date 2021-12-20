import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import style from "./style";

export default function Schedule() {
  const { Title, Container, Content, Chosen } = style;
  const { idFilm } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilm}/showtimes`
    );
    promise.then((response) => setFilm(response.data));
  }, []);

  if (!film) {
    return null;
  }

  return (
    <Content>
      <Title>Selecione o horario</Title>
      <Container>
        {film.days.map((item, index) => (
          <Session key={index} day={item} />
        ))}
      </Container>

      <Chosen>
        <div className="movie">
          <img src={film.posterURL} alt={film.title} />
        </div>
        {film.title}
      </Chosen>
    </Content>
  );
}

function Session({ day }) {
  const { Container } = style;
  const { weekday, date, showtimes } = day;

  return (
    <Container>
      <p className="date">{`${weekday} - ${date}`}</p>
      <div className="schedules">
        {showtimes.map((item, index) => (
          <ShowTime key={index} {...item} />
        ))}
      </div>
    </Container>
  );
}

function ShowTime({ name, id }) {
  return (
    <Link to={`/assentos/${id}`}>
      <div className="show-times">{name}</div>
    </Link>
  );
}
