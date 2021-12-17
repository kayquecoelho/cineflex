import styled from 'styled-components';

export default function Success () {
    return (
    <Content>
        <Title>Pedido feito com sucesso!</Title>
        <Info>
            <FilmSession>
                <p className="title">Filme e sessão</p>
                <p className="movie"></p>
                <p className="session"></p>
            </FilmSession>
        </Info>
    </Content>)
}

const Content = styled.div`
    margin-top: 67px;
    padding: 0 20px;
`
const Title = styled.p`
    width: 100%;
    height: 110px;

    margin-bottom: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #247A6B;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
`

const Info = styled.div`
    color: #293845;
`
const FilmSession = styled.div`
    .title {
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
    }
`
