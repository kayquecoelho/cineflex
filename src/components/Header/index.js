import { useLocation, useNavigate } from "react-router-dom";
import style from "./style";

export default function Header() {
  const { Top } = style;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }

  if (pathname !== "/") {
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
