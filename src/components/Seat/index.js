import { useState } from "react";
import style from "./style";

export default function Seat({
  name,
  id,
  isAvailable,
  setBookedSeatsIds,
  bookedSeatsIds,
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
      const removeIndex = bookedSeatsIds.findIndex((item) => item === id);
      bookedSeatsIds.splice(removeIndex, 1);
      bookedSeatsName.splice(removeIndex, 1);
      setBookedSeatsIds([...bookedSeatsIds]);
      setBookedSeatsName([...bookedSeatsName]);
      setClassName("free");
      return;
    }

    setClassName("selected");
    setBookedSeatsIds([...bookedSeatsIds, id]);
    setBookedSeatsName([...bookedSeatsName, name]);
  }

  return (
    <Seat color={className} onClick={selectSeat}>
      {name}
    </Seat>
  );
}
