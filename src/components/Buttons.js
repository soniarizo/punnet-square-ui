import { useState } from "react";
import SingleButton from "./SingleButton";
import { ReactComponent as GreenPea } from "../assets/green_pea.svg";
import { ReactComponent as YellowPea } from "../assets/yellow_pea.svg";

const Buttons = ({ buttons, doSomethingAfterClick }) => {
  const [clickedId, setClickedId] = useState(null);

  const handleClick = (buttonName, id) => {
    setClickedId(id);
    doSomethingAfterClick(buttonName);
  };
  return buttons.map((buttonLabel, i) => (
    <button
      key={i}
      name={buttonLabel}
      id={buttonLabel}
      fill={"black"}
      onClick={() => handleClick(buttonLabel, i)}
      opacity={i === clickedId ? 0.5 : 0.5}
      className={i === clickedId ? "customButton active" : "customButton"}
    >
      {buttonLabel === "yy" ? <GreenPea /> : <YellowPea />}
      {buttonLabel}
    </button>
  ));
};

export default Buttons;
