import { useState } from "react";
import style from "./style";

export default function Seat ({name, id, isAvailable, setBookedSeats, bookedSeats}) {
    const [className, setClassName] = useState(isAvailable ? "free": "occupied")
    const {Seat} = style;
    function selectSeat (){
       
        if (className === "occupied"){
            return alert("Este assento está ocupado!");
        }
        if (className === "selected"){
            const index = bookedSeats.findIndex((item) => item === id);
            bookedSeats.splice(index, 1);
            setClassName("free")
            return;
        }
        
        setClassName("selected")
        setBookedSeats([...bookedSeats, id])
    }

    return (
        <Seat color={className} onClick={selectSeat}>
            {name}
        </Seat>
    )
}