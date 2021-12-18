import styled from "styled-components";

const Content = styled.div`
    margin-top: 67px;
    padding: 0 20px;

    letter-spacing: 0.04em;
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
`

const Info = styled.div`
    color: #293845;

    .comeback{
        width: 225px;
        height: 42px;

        background-color: #E8833A;
        border: none;
        border-radius: 3px;

        display: flex;
        align-items: center;
        justify-content: center;
        
        margin: 40px auto;

        color: #FFFFFF;
        font-size: 18px;
        line-height: 21px;
    }
`
const Container = styled.div`
    font-size: 22px;
    font-weight: 400;
    line-height: 26px;

    margin-bottom: 30px;
    word-break: break-word;

    .title {
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 10px;
    }
`

export default {
    Container, 
    Info, 
    Title, 
    Content
}