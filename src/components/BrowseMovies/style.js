import styled from "styled-components";

const Content = styled.div`
    margin-top: 67px;

    .title {
        height: 110px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #293845;
        font-size: 24px;
        font-weight: 400;
        line-height: 28px;
        letter-spacing: 0.04em;
        text-align: center;
    }

`

const MoviesSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;

    .movie {
        width: 145px;
        height: 209px;

        padding: 8px;
        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

export {
    MoviesSection,
    Content
}

