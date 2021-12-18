import { Link } from 'react-router-dom';
import style from "./style"

export default function Success ({filmInfo: {cpf, day, movie, seats, username, session}}) {
    seats.sort()
    const {Container, Title, Info, Content} = style;

    return (
    <Content>
        <Title>Pedido feito com sucesso!</Title>
        <Info>
            <Container>
                <p className="title">Filme e sessão</p>
                <p className="movie">{movie.title}</p>
                <p className="session">{`${day.date} ${session}`}</p>
            </Container>
            <Container>
                <p className="title">Ingressos</p>
                {seats.map(i => {
                    return (
                        <p key={i} className="seats">Assento {i}</p>
                    )
                })}
            </Container>
            <Container>
                <p className="title">Comprador</p>
                <p className="username">Nome: {username}</p>
                <p className="cpf">CPF: {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</p>
            </Container>
            
            <button className="comeback">Voltar para Home</button>
           
        </Info>
    </Content>)
}


