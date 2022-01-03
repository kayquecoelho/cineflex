import { useState } from "react";
import { Seat } from "./style";

export default function Seat({
  name,
  id,
  isAvailable,
  setBookedSeatsIds,
  bookedSeatsIds,
  setBookedSeatsName,
  bookedSeatsName,
}) {
  const [className, setClassName] = useState(isAvailable ? "free" : "occupied");

  function selectSeat() {
    if (className === "occupied") {
      return alert("Este assento está ocupado!");
    }
    if (className === "selected") {
      setBookedSeatsIds(bookedSeatsIds.filter((item) => item !== id));
      setBookedSeatsName(bookedSeatsName.filter((item) => item !== id));
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
