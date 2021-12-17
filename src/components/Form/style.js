import styled from "styled-components";

const Container = styled.div `
    color:  #293845;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;

    input {
        width: 325px;
        height: 51px;
        
        padding: 15px;
        margin-bottom: 8px;

        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder {
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }
`
export default {
    Container
}