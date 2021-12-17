import styled from "styled-components";

const Content = styled.div`
    margin-top: 67px;
    margin-bottom: 147px;
    padding: 0 25px;

    .title {
        width: 100%;
        height: 110px;

        color: #293845;

        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const SeatsBrowse = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 7px;

    margin-bottom: 16px;
`

const Subtitle = styled.div `
    display: flex;
    justify-content: space-evenly;

    padding: 0 20px;
    margin-bottom: 40px;
`

const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;

    .type {
        width: 25px;
        height: 25px;

        border-radius: 17px;
    }

    .type-name {
        color: #4E5A65;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
    }

    .selected {
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }

    .free {
        background: #C3CFD9;
        border: 1px solid #7B8B99;
    }

    .occupied {
        background: #FBE192;
        border: 1px solid #F7C52B;
    }
}

`

const Footer = styled.footer`
    width: 100%;
    height: 117px;

    display: flex;
    align-items: center;

    padding: 0 10px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;

    position: fixed;
    bottom: 0;
    left: 0;

    .movie {
        width: 64px;
        height: 89px;
        
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;

        padding: 8px;
        margin-right: 14px;
    }

    .movie img {
        width: 48px;
        height: 73px;
    }

    .description {
        color: #293845;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
    }
    .film-title {
        margin-bottom: 5px;  
    }
`

export default {
    Content,
    SeatsBrowse,
    Subtitle,
    Container,
    Footer,
}