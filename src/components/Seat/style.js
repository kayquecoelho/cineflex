import styled from "styled-components";

const Seat = styled.div`
    width: 26px;
    height: 26px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;

    background-color: ${(props) => {
            if (props.color === "free"){
                return "#C3CFD9";
            } 
            if (props.color === "occupied"){
                return "#FBE192";
            }
            if (props.color === "selected"){
                return "#8DD7CF";
            }
        } 
    };
    border: ${ (props) => {
             if (props.color === "free"){
                return "1px solid #7B8B99";
            } 
            if (props.color === "occupied"){
                return "1px solid #F7C52B";
            }
            if (props.color === "selected"){
                return "1px solid #1AAE9E";
            }
        }
    };
    border-radius: 12px;
    cursor: ${(props) => props.color === "occupied" ? "not-allowed": "pointer"};
    color: #000000;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
`

export {
    Seat
};