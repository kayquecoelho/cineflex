import { useState } from "react";
import style from "./style";

export default function Seat({
  name,
  id,
  isAvailable,
  setBookedSeats,
  bookedSeats,
  setBookedSeatsName,
  bookedSeatsName,
}) {
    
  const { Seat } = style;
  const [className, setClassName] = useState(isAvailable ? "free" : "occupied");

  function selectSeat() {
    if (className === "occupied") {
      return alert("Este assento está ocupado!");
    }
    if (className === "selected") {
      const index = bookedSeats.findIndex((item) => item === id);
      bookedSeats.splice(index, 1);
      setClassName("free");
      return;
    }

    setClassName("selected");
    setBookedSeats([...bookedSeats, id]);
    setBookedSeatsName([...bookedSeatsName, name]);
  }

  return (
    <Seat color={className} onClick={selectSeat}>
      {name}
    </Seat>
  );
}
