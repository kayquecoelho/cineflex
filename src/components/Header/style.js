import styled from "styled-components";

const Top = styled.header`
    width: 100%;
    height: 67px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    background-color: #C3CFD9;
    
    color: #E8833A;
    font-size: 34px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: center;

    .history {
        cursor: pointer;
        background-color: #FFFFFF;
        border: none; 
        border-radius: 5px;
        position: fixed;
        top: 10px;
        left: 10px;
        transition: all 0.3s;

        &:hover {
            background-color: grey;
            width: 75px;
        }
    }

`
export {
    Top
};