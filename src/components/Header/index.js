import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./style";

export default function Header() {
  const { Top } = style;
  const location = useLocation();
  const navigate = useNavigate();
  const [id, setId] = useState();
  const str = location.pathname.split("/");

  useEffect(() => {
    if (str[1] === "sessoes") {
      setId(str[2]);
    }
  }, [str]);

  function handleClick() {
    if (str[1] === "sessoes") {
      navigate("/");
    } else if (str[1] === "assentos") {
      navigate(`/sessoes/${id}`);
    }
  }

  if (location.pathname !== "/" && location.pathname !== "/sucesso") {
    return (
      <Top>
        CINEFLEX
        <button className="history" onClick={handleClick}>
          Voltar
        </button>
      </Top>
    );
  }

  return <Top>CINEFLEX</Top>;
}
