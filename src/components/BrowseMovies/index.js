import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./style";

export default function BrowseMovies() {
  const { MoviesSection, Content } = style;
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/cineflex/movies"
    );
    promise.then((response) => {
      setFilms(response.data);
    });
  }, []);

  return (
    <Content>
      <p className="title">Selecione o filme</p>

      <MoviesSection>
        {films.map((item) => (
          <Movie key={item.title} {...item}></Movie>
        ))}
      </MoviesSection>
    </Content>
  );
}
function Movie({ id, posterURL }) {
  return (
    <Link to={`/sessoes/${id}`}>
      <div className="movie">
        <img src={posterURL} alt=""/>
      </div>
    </Link>
  );
}
